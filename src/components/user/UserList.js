

"use client";
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { UserPlus, Upload, CheckCircle, Edit, Trash2 } from "lucide-react";
import {
  Button,
  Modal,
  Group,
  TextInput,
  Checkbox,
  Table,
  Badge,
  Radio,
  Flex,
  Paper,
  LoadingOverlay,
  Input,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("single");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    optIn: false,
  });
  const [csvFile, setCsvFile] = useState(null); // To store CSV file

  // Handle Add or Update User
  const handleAddUser = () => {
   // Validate if the required fields are filled
  if (!formData.firstName || !formData.lastName || !formData.mobile) {
    alert("Please fill in all required fields.");
    return;
  }

  // Validate First and Last Name (Only Alphabets)
  const namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(formData.firstName) || !namePattern.test(formData.lastName)) {
    alert("First and Last name must only contain alphabets.");
    return;
  }

  // Validate Mobile Number (10 Digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(formData.mobile)) {
    alert("Mobile number must be a 10-digit number.");
    return;
  }

    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id
            ? { ...formData, id: editingUser.id }
            : user
        )
      );
    } else {
      setUsers((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
    }
    handleModalClose();
  };

  // Handle Edit User
  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData(user);
    setModalType("single");
    setShowModal(true);
  };

  // Handle Delete Single User
  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setSelectedUsers((prev) => prev.filter((selectedId) => selectedId !== id));
  };

  // Handle Bulk Delete
  const handleBulkDelete = () => {
    setUsers((prev) => prev.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  // Handle CSV Import
  const handleImportCSV = (file) => {
    if (file && file.type === "csv") {
        setFileName(file.name);
        setUploaded(true);
        setCsvFile(file);
        setLoading(true);
        setUploaded(false);
    
        setTimeout(() => {
          setLoading(false);
          setUploaded(true);
        }, 2000);
      } else {
        alert("Please upload CSV file.");
        setUploaded(false);
      }
 
  };

  // Handle Modal Close and Reset Form
  const handleModalClose = () => {
    setShowModal(false);
    setEditingUser(null);
    setUploaded(false)
    setFormData({
      mobile: "",
      firstName: "",
      lastName: "",
      optIn: false,
    });
    setCsvFile(null); // Reset CSV file selection
  };

  // Handle Select/Deselect User
  const toggleUserSelection = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            User Management
          </h1>
          <Flex gap={12}>
            <Button
              onClick={() => setShowModal(true)}
              leftSection={<UserPlus size={20} />}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add User
            </Button>
            {selectedUsers.length > 0 && (
              <Button
                onClick={handleBulkDelete}
                leftSection={<Trash2 size={20} />}
                color="red"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Delete Selected
              </Button>
            )}
          </Flex>
        </div>

        {/* User Table */}
        <Paper shadow="xs" p="md">
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>
                  <Checkbox
                    checked={
                      selectedUsers.length === users.length && users.length > 0
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(users.map((user) => user.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                  />
                </th>
                <th style={{ textAlign: "left" }}>First Name</th>
                <th style={{ textAlign: "left" }}>Last Name</th>
                <th style={{ textAlign: "left" }}>Mobile</th>
                <th style={{ textAlign: "left" }}>optIn</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="py-2 mb-2">
                  <td style={{ textAlign: "center" }}>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                    />
                  </td>
                  <td style={{ textAlign: "left" }}>{user.firstName}</td>
                  <td style={{ textAlign: "left" }}>{user.lastName}</td>
                  <td style={{ textAlign: "left" }}>{user.mobile}</td>
                  <td style={{ textAlign: "left" }}>
                    <Badge color={user.optIn ? "green" : "red"}>
                      {user.optIn ? "yes" : "no"}
                    </Badge>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Flex gap={10} justify="center">
                      <Button
                        size="xs"
                        color="blue"
                        onClick={() => handleEditUser(user)}
                      >
                        <Edit size={14} />
                      </Button>
                    </Flex>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>

        {/* Modal */}
        <Modal
          opened={showModal}
          onClose={handleModalClose}
          title={editingUser ? "Edit User" : "Add User"}
          centered
          size="lg"
        >
          <Radio.Group value={modalType} onChange={setModalType} mb="md">
            <Group position="center">
              <Radio value="single" label="One by One" />
              <Radio value="bulk" label="Via Bulk Upload" />
            </Group>
          </Radio.Group>

          <div className="min-h-[220px] p-4">
            {modalType === "single" ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* First Name and Last Name */}
                <Flex gap="md">
                  <TextInput
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                  <TextInput
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="w-full"
                  />
                </Flex>

                {/* Phone Number */}
                <Input
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                  leftSection="+91"
                  className="w-full"
                />

                {/* Checkbox */}
                <Checkbox
                  label="WhatsApp Opted in"
                  checked={formData.optIn}
                  onChange={(e) =>
                    setFormData({ ...formData, optIn: e.target.checked })
                  }
                  mt="md"
                />

                {/* Add/Update Button */}
                <Button onClick={handleAddUser} mt="md" fullWidth>
                  {editingUser ? "Update User" : "Add User"}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                {/* Dropzone */}
               
                <Dropzone onDrop={(files) => handleImportCSV(files[0])}>
                  <div className="flex flex-col items-center justify-center py-10 cursor-pointer">
                    {!uploaded ? (
                      // Upload icon before file is uploaded
                      <Upload size={48} color="gray" />
                    ) : (
                      // Checkmark icon after file is uploaded
                      <CheckCircle size={32} color="green" />
                    )}
                    <p
                      className={`text-gray-500 text-sm mt-2 ${
                        uploaded ? "text-green-600" : ""
                      }`}
                    >
                      {uploaded
                        ? "CSV file uploaded!"
                        : "Drag and drop CSV file here or click to upload"}
                    </p>
                  </div>
                </Dropzone>

                {/* Add User Button */}
                <Button
                  onClick={() => {
                    if (!csvFile) {
                      alert("Please upload a CSV file.");
                      return;
                    }
                    handleModalClose();
                  }}
                  fullWidth
                >
                  Add User
                </Button>
              </div>
            )}
          </div>
        </Modal>

        {/* Loading Overlay */}
        {loading && (
          <LoadingOverlay
            visible
            overlayblur={1}
            loaderProps={{
              variant: "dots",
              size: "lg",
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserList;
