// 'use client'
// import { useState } from 'react';
// import DashboardLayout from '@/components/layout/DashboardLayout';
// import { 
//   UserPlus,
//   Search,
//   Edit,
//   Trash2,
//   Check,
//   X
// } from 'lucide-react';

// const UserList = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
//     { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
//   ]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleAddUser = (newUser) => {
//     setUsers([...users, { ...newUser, id: users.length + 1 }]);
//     setShowAddModal(false);
//   };

//   const handleEditUser = (updatedUser) => {
//     setUsers(users.map(user => 
//       user.id === updatedUser.id ? updatedUser : user
//     ));
//     setSelectedUser(null);
//   };

//   const handleDeleteUser = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//     setShowDeleteModal(false);
//     setSelectedUser(null);
//   };

//   const filteredUsers = users.filter(user => 
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <DashboardLayout>
//       <div className="space-y-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-semibold">User Management</h1>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             <UserPlus size={20} className="mr-2" />
//             Add User
//           </button>
//         </div>

//         {/* Search and Filters */}
//         <div className="flex gap-4">
//           <div className="flex-1 relative">
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//             <thead className="bg-gray-50 dark:bg-gray-900">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//               {filteredUsers.map((user) => (
//                 <tr key={user.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900 dark:text-white">
//                       {user.name}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       {user.email}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                       {user.role}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       user.status === 'Active' 
//                         ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
//                         : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
//                     }`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => setSelectedUser(user)}
//                         className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400"
//                       >
//                         <Edit size={18} />
//                       </button>
//                       <button
//                         onClick={() => {
//                           setSelectedUser(user);
//                           setShowDeleteModal(true);
//                         }}
//                         className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add/Edit User Modal */}
//         {(showAddModal || selectedUser) && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
//               <h2 className="text-xl font-semibold mb-4">
//                 {selectedUser ? 'Edit User' : 'Add New User'}
//               </h2>
//               <UserForm
//                 user={selectedUser}
//                 onSubmit={selectedUser ? handleEditUser : handleAddUser}
//                 onCancel={() => {
//                   setShowAddModal(false);
//                   setSelectedUser(null);
//                 }}
//               />
//             </div>
//           </div>
//         )}

//         {/* Delete Confirmation Modal */}
//         {showDeleteModal && selectedUser && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
//               <h2 className="text-xl font-semibold mb-4">Delete User</h2>
//               <p className="mb-4">Are you sure you want to delete {selectedUser.name}?</p>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={() => {
//                     setShowDeleteModal(false);
//                     setSelectedUser(null);
//                   }}
//                   className="px-4 py-2 text-gray-600 dark:text-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => handleDeleteUser(selectedUser.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };

// const UserForm = ({ user, onSubmit, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     role: user?.role || 'User',
//     status: user?.status || 'Active'
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(user ? { ...user, ...formData } : formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Name
//         </label>
//         <input
//           type="text"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Role
//         </label>
//         <select
//           value={formData.role}
//           onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//           className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
//         >
//           <option value="Admin">Admin</option>
//           <option value="User">User</option>
//         </select>
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//           Status
//         </label>
//         <select
//           value={formData.status}
//           onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//           className="w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>
//       <div className="flex justify-end space-x-2 pt-4">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-gray-600 dark:text-gray-400"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           {user ? 'Update' : 'Add'} User
//         </button>
//       </div>
//     </form>
//   );
// };

// export default UserList;




import DashboardLayout from '@/components/layout/DashboardLayout'
import UserList from '@/components/user/UserList'
import React from 'react'

const page = () => {
  return (
   
    <UserList/>
 
  )
}

export default page