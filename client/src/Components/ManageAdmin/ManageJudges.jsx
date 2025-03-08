import React, { useState } from 'react';
import { Button, TextInput, Textarea, Modal } from '@mantine/core';

const ManageJudges = ({ judges, setJudges }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddJudge = () => {
    if (!formData.name.trim()) return;

    const newJudge = {
      id: judges.length + 1,
      ...formData,
    };

    setJudges([...judges, newJudge]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
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
          label="Judge Name"
          placeholder="Name of Judge"
          value={formData.name}
          onChange={(event) => handleChange('name', event.target.value)}
          required
        />
        <Button
          onClick={() => {
            handleAddJudge();
          }}
          w="100%"
        >
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
      <h2>Manage Judges</h2>
      <Button onClick={() => setShowForm(true)} className="action-button">
        Create Judge Account
      </Button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {judges.map((judge) => (
              <tr>
                <td>{judge.name}</td>
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

export default ManageJudges;

//  <tr>
//    <td>JudgeName</td>
//    <td className="actions-column">
//      <Button className="edit-btn" size="xs">
//        Edit
//      </Button>

//      <Button className="delete-btn" size="xs">
//        Delete
//      </Button>
//    </td>
//  </tr>;
