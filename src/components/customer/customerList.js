"use client";
import { useEffect, useState } from "react";
import { UserPlus, Edit, Trash2, ShieldCheck } from "lucide-react";
import {
  Button,
  Modal,
  Group,
  TextInput,
  Checkbox,
  Table,
  Badge,
  Flex,
  Paper,
  ScrollArea,
  Select,
} from "@mantine/core";
import axios from "axios";
import { toast } from "react-toastify"; // Ensure toast notifications are correctly imported
import { motion } from "framer-motion"; // Import Framer Motion

const API_URL = "http://192.168.0.101:8000/api/customers";

const CustomerList = () => {
  const [loading, setLoading] = useState(false); // Global loading state
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    optInStatus: false,
    countryCode: "+91", // Default country code (Dubai)
  });

  const [loadingCustomerId, setLoadingCustomerId] = useState(null); // To track loading state per customer

  const countryCodes = [
    { value: "+91", label: "+91" },
    { value: "+97", label: "+97" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
  ];

  // Fetch customers
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/getall`);
      setCustomers(data);
    } catch (error) {
      toast.error("Error fetching customers: " + error.message);
    }
  };

  // Add or Update Customer
  const handleAddOrUpdateCustomer = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const phoneWithCode = formData.countryCode + formData.phone; // Concatenate country code with phone number

    try {
      const customerData = { ...formData, phone: phoneWithCode };

      if (editingCustomer) {
        await axios.put(
          `${API_URL}/updatecustomer/${editingCustomer.customerId}`,
          customerData
        );
        toast.success("Customer updated successfully!");
      } else {
        await axios.post(`${API_URL}/create`, customerData);
        toast.success("Customer added successfully!");
      }

      fetchCustomers();
      closeModal();
    } catch (error) {
      toast.error(
        "Error saving customer: " + error.response?.data?.message ||
          error.message
      );
    }
  };

  // Verify Customer (single customer verification)
  const handleVerifyCustomer = async (customer) => {
    setLoadingCustomerId(customer.customerId); // Set loading state for the specific customer

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay for demonstration

      setLoadingCustomerId(null); // Reset loading after verification
      toast.success(`${customer.phone} Matched!`);
    } catch (error) {
      setLoadingCustomerId(null); // Reset loading on error
      toast.error(`${customer.phone} Not Matched!`);
    }
  };

  // Edit Customer
  const handleEditCustomer = (customer) => {
    const phoneWithoutCode = customer.phone.slice(-10); // Extract last 10 digits
    const countryCode = customer.phone.substring(0, customer.phone.length - 10); // Extract the country code

    setEditingCustomer(customer);
    setFormData({
      ...customer,
      phone: phoneWithoutCode,
      countryCode: countryCode || "+91", // Default to +91 if not provided
    });
    setShowModal(true);
  };

  // Delete Customer (Soft Delete)
  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`${API_URL}/deletecustomer/${id}`);
      fetchCustomers();
      toast.success("Customer deleted successfully!");
    } catch (error) {
      toast.error("Error deleting customer: " + error.message);
    }
  };

  // Bulk Delete
  const handleBulkDelete = async () => {
    for (const id of selectedCustomers) {
      await handleDeleteCustomer(id);
    }
    setSelectedCustomers([]);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
    setEditingCustomer(null);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      optInStatus: false,
      countryCode: "+91", // Reset to default country code (Dubai)
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Flex justify="space-between" align="center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Flex gap={12}>
          <Button
            onClick={() => setShowModal(true)}
            leftSection={<UserPlus size={20} />}
            className="bg-blue-500 text-white"
          >
            Add Customer
          </Button>
          {selectedCustomers.length > 0 && (
            <Button
              onClick={handleBulkDelete}
              leftSection={<Trash2 size={20} />}
              color="red"
              className="bg-red-600 text-white"
            >
              Delete
            </Button>
          )}
        </Flex>
      </Flex>

      {/* Table */}
      <Table striped highlightOnHover className="shadow-md">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">
              <Checkbox
                checked={selectedCustomers.length === customers.length}
                onChange={() =>
                  setSelectedCustomers(customers.map((c) => c.customerId))
                }
              />
            </th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Opt-In Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.customerId}
              className="cursor-pointer hover:bg-gray-100 transition-colors duration-300"
              onClick={(e) => {
                if (!e.target.closest("td input, td button")) {
                  handleEditCustomer(customer);
                }
              }}
            >
              <td className="px-4 py-2">
                <Checkbox
                  checked={selectedCustomers.includes(customer.customerId)}
                  onChange={() => {
                    setSelectedCustomers((prev) =>
                      prev.includes(customer.customerId)
                        ? prev.filter((id) => id !== customer.customerId)
                        : [...prev, customer.customerId]
                    );
                  }}
                />
              </td>
              <td className="text-left px-4 py-2">{customer.firstName}</td>
              <td className="text-left px-4 py-2">{customer.lastName}</td>
              <td className="text-left px-4 py-2">{customer.phone}</td>
              <td className="text-left px-4 py-2">{customer.email}</td>
              <td className="px-4 py-2">
                <Badge color={customer.optInStatus ? "green" : "gray"}>
                  {customer.optInStatus ? "Yes" : "No"}
                </Badge>
              </td>
              <td className="px-4 py-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: loadingCustomerId === customer.customerId ? 0.5 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click from bubbling up to the row
                      handleVerifyCustomer(customer); // Verify specific customer
                    }}
                    leftSection={
                      loadingCustomerId === customer.customerId ? (
                        <div className="animate-spin rounded-full w-5 h-5 border-t-2 border-white"></div>
                      ) : (
                        <ShieldCheck size={16} />
                      )
                    }
                    variant="subtle"
                    disabled={loadingCustomerId === customer.customerId}
                  >
                    {loadingCustomerId === customer.customerId ? "Verifying..." : "Verify"}
                  </Button>
                </motion.div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding/Editing Customer */}
      <Modal
        opened={showModal}
        onClose={closeModal}
        title={editingCustomer ? "Edit Customer" : "Add Customer"}
        centered
        size="lg"
        styles={{ modal: { width: "40%", height: "40vh" } }} 
      >
        <ScrollArea style={{ height: "80%" }}>
          <Paper padding="md" className="space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              classNames={{ input: "border-gray-300" }}
            />
            <TextInput
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              classNames={{ input: "border-gray-300" }}
            />
            <Select
              label="Country Code"
              value={formData.countryCode}
              onChange={(value) =>
                setFormData({ ...formData, countryCode: value })
              }
              data={countryCodes}
            />
            <TextInput
              label="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              classNames={{ input: "border-gray-300" }}
            />
            <TextInput
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              classNames={{ input: "border-gray-300" }}
            />
            <Checkbox
              label="Opt-In Status"
              checked={formData.optInStatus}
              onChange={(e) =>
                setFormData({ ...formData, optInStatus: e.target.checked })
              }
            />
            <Group position="right">
              <Button onClick={handleAddOrUpdateCustomer}>
                {editingCustomer ? "Update Customer" : "Add Customer"}
              </Button>
            </Group>
          </Paper>
        </ScrollArea>
      </Modal>
    </div>
  );
};

export default CustomerList;
















