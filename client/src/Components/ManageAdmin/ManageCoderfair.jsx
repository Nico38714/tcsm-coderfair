import React, { useState } from 'react';
import { Button, TextInput, Textarea, Modal} from '@mantine/core';

const ManageCoderfair = ({coderfair, setCoderFair}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [formData, setFormData] = useState({
    coderfair_name: '',
    date: '',
    notes: '',
  });
  
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      coderfair_name: '',
      date: '',
      notes: '',
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
          label="CoderFair Name"
          placeholder="Name of CoderFair"
          value={formData.coderfair_name}
          onChange={(event) =>
            handleChange('coderfair_name', event.target.value)
          }
          required
        />
        <TextInput
          label="CoderFair Date"
          placeholder="Date for CoderFair"
          value={formData.date}
          onChange={(event) => handleChange('date', event.target.value)}
          required
        />
        <Button onClick={() => setShowForm(false)} w="100%" >
          Submit
        </Button>
        <Button
          onClick={() => setShowForm(false)}
          w="100%"
          color="rgba(191, 191, 191, 1)"
          mt='10'
        >
          Close
        </Button>
      </Modal>
      <h2>Manage Coderfair</h2>
      <Button onClick={() => setShowForm(true)} className="action-button">
        Create Coderfair
      </Button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CoderfairName</td>
              <td>CoderfairDate</td>
              <td className="actions-column">
                <Button className="edit-btn" size="xs">
                  Edit
                </Button>

                <Button className="delete-btn" size="xs">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoderfair;
