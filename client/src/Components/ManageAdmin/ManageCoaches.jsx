import React, { useState } from 'react';
import { Button, TextInput, Textarea, Modal } from '@mantine/core';
const ManageCoaches = ({ coaches, setCoaches }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddCoach = () => {
    if (!formData.name.trim()) return;
    if (!formData.contact.trim()) return;
    const newCoach = {
      id: coaches.length + 1,
      ...formData,
    };

    setCoaches([...coaches, newCoach]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      coach_name: '',
      coach_contact: '',
    });
    setEditingProjectId(null);
    setShowForm(false);
  };
  return (
    <div className="section">
      <Modal
        opened={showForm}
        onClose={resetForm}
        title={editingProjectId ? 'Edit Project' : 'Create New Project'}
        centered
        overlayProps={{ style: { zIndex: 7000 } }}
        zIndex={8000}
      >
        <TextInput
          label="Coach Name"
          placeholder="Name of Coach"
          value={formData.name}
          onChange={(event) => handleChange('name', event.target.value)}
          required
        />
        <TextInput
          label="Coach Contact"
          placeholder="Coach's Email"
          type="email"
          value={formData.contact}
          onChange={(event) => handleChange('contact', event.target.value)}
          required
        />
        <Button onClick={() => handleAddCoach()} w="100%">
          Submit
        </Button>
        <Button
          onClick={() => setShowForm(false)}
          w="100%"
          color="rgba(191, 191, 191, 1)"
          mt="10"
        >
          Close
        </Button>
      </Modal>
      <h2>Manage Coaches</h2>
      <Button onClick={() => setShowForm(true)} className="action-button">
        Create Coach Account
      </Button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {coaches.map((coach) => (
              <tr>
                <td>{coach.name}</td>
                <td>{coach.contact}</td>
                <td className="actions-column">
                  <Button className="edit-btn" size="xs">
                    Edit
                  </Button>

                  <Button className="delete-btn" size="xs">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoaches;
