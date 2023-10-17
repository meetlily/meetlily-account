import React from 'react';
import ModuleConfigForm from '../components/ModuleConfigForm';

const formFields = [
  {
    "label": "Module",
    "name": "module",
    "type": "text",
    "value": "User Management",
    "required": true
  },
  {
    "label": "Description",
    "name": "description",
    "type": "text",
    "value": "Manage and administer user accounts",
    "required": true
  },
  {
    "label": "Settings",
    "name": "settings",
    "type": "object",
    "fields": [
      {
        "label": "Allow Create User",
        "name": "allowCreateUser",
        "type": "checkbox",
        "value": true
      },
      {
        "label": "Allow Edit User",
        "name": "allowEditUser",
        "type": "checkbox",
        "value": true
      },
      {
        "label": "Allow Delete User",
        "name": "allowDeleteUser",
        "type": "checkbox",
        "value": true
      },
      {
        "label": "Max Users Per Role",
        "name": "maxUsersPerRole",
        "type": "number",
        "value": 100,
        "required": true
      }
    ]
  },
  {
    "label": "Permissions",
    "name": "permissions",
    "type": "object",
    "fields": [
      {
        "label": "View",
        "name": "view",
        "type": "multiselect",
        "options": ["admin", "manager", "employee"],
        "value": ["admin", "manager", "employee"],
        "required": true
      },
      {
        "label": "Edit",
        "name": "edit",
        "type": "multiselect",
        "options": ["admin", "manager"],
        "value": ["admin", "manager"],
        "required": true
      },
      {
        "label": "Delete",
        "name": "delete",
        "type": "multiselect",
        "options": ["admin"],
        "value": ["admin"],
        "required": true
      }
    ]
  },
  {
    "label": "Data Sources",
    "name": "dataSources",
    "type": "object",
    "fields": [
      {
        "label": "Users",
        "name": "users",
        "type": "text",
        "value": "https://api.example.com/users",
        "required": true
      },
      {
        "label": "Roles",
        "name": "roles",
        "type": "text",
        "value": "https://api.example.com/roles",
        "required": true
      },
      {
        "label": "Permissions",
        "name": "permissions",
        "type": "text",
        "value": "https://api.example.com/permissions",
        "required": true
      }
    ]
  },
  {
    "label": "Metadata",
    "name": "metadata",
    "type": "object",
    "fields": [
      {
        "label": "Author",
        "name": "author",
        "type": "text",
        "value": "Your Name",
        "required": true
      },
      {
        "label": "Version",
        "name": "version",
        "type": "text",
        "value": "1.0",
        "required": true
      },
      {
        "label": "Created At",
        "name": "createdAt",
        "type": "text",
        "value": "2023-01-15",
        "required": true
      }
    ]
  },
  {
    "label": "Features",
    "name": "features",
    "type": "object",
    "fields": [
      {
        "label": "Analytics",
        "name": "analytics",
        "type": "checkbox",
        "value": true
      },
      {
        "label": "Notifications",
        "name": "notifications",
        "type": "checkbox",
        "value": true
      },
      {
        "label": "Search",
        "name": "search",
        "type": "checkbox",
        "value": true
      }
    ]
  },
  {
    "label": "Customization",
    "name": "customization",
    "type": "object",
    "fields": [
      {
        "label": "Logo URL",
        "name": "logoUrl",
        "type": "text",
        "value": "https://example.com/user-management-logo.png",
        "required": true
      },
      {
        "label": "Theme Color",
        "name": "themeColor",
        "type": "text",
        "value": "#FF5733",
        "required": true
      },
      {
        "label": "Custom Fields",
        "name": "customFields",
        "type": "array",
        "value": [
          {
            "label": "Employee ID",
            "type": "text"
          },
          {
            "label": "Department",
            "type": "text"
          }
        ]
      },
      {
        "label": "Alerts",
        "name": "alerts",
        "type": "array",
        "value": [
          {
            "type": "info",
            "message": "Welcome to the User Management module!"
          },
          {
            "type": "warning",
            "message": "Please complete your user profile."
          }
        ]
      },
      {
        "label": "User Roles",
        "name": "userRoles",
        "type": "array",
        "value": [
          {
            "name": "Admin",
            "permissions": ["view", "edit", "delete"]
          },
          {
            "name": "Manager",
            "permissions": ["view", "edit"]
          },
          {
            "name": "Employee",
            "permissions": ["view"]
          }
        ]
      },
      {
        "label": "Modules",
        "name": "modules",
        "type": "array",
        "value": [
          {
            "name": "Reports",
            "enabled": true,
            "permissions": {
              "view": ["admin", "manager"],
              "edit": ["admin"]
            }
          },
          {
            "name": "Activity Log",
            "enabled": true,
            "permissions": {
              "view": ["admin", "manager"],
              "edit": ["admin"]
            }
          }
        ]
      },
      {
        "label": "Integrations",
        "name": "integrations",
        "type": "array",
        "value": [
          {
            "name": "Slack",
            "enabled": true,
            "apiKey": "your-slack-api-key"
          },
          {
            "name": "Google Workspace",
            "enabled": true,
            "apiKey": "your-google-api-key"
          }
        ]
      }
    ]
  }
];

const UserManagement = () => {
  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send the data to a server or update the state.
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Module Configuration</h1>
      <ModuleConfigForm formFields={formFields} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserManagement;
