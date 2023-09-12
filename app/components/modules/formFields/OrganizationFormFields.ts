'use client'

import { FormFieldGroup } from "@/app/types";

const OrganizationFormFields: FormFieldGroup[] = [
	{
		label: 'Basic Information',
		group: 'Organization Information',
		fields: [
			{
				label: 'Organization Name',
				name: 'organizationName',
				type: 'text',
				placeholder: 'Enter organization name'
			},
			{
				label: 'Address',
				name: 'address',
				type: 'text',
				placeholder: 'Enter address'
			},
			{
				label: 'City',
				name: 'city',
				type: 'text',
				placeholder: 'Enter city'
			},
			{
				label: 'State',
				name: 'state',
				type: 'text',
				placeholder: 'Enter state'
			},
			{
				label: 'Country',
				name: 'country',
				type: 'text',
				placeholder: 'Enter country'
			},
			{
				label: 'Postal Code',
				name: 'postalCode',
				type: 'text',
				placeholder: 'Enter postal code'
			},
			{
				label: 'Phone Number',
				name: 'phoneNumber',
				type: 'tel',
				placeholder: 'Enter phone number'
			},
			{
				label: 'Fax Number',
				name: 'faxNumber',
				type: 'tel',
				placeholder: 'Enter fax number'
			},
			{
				label: 'Website',
				name: 'website',
				type: 'text',
				placeholder: 'Enter website URL'
			},
			{
				label: 'Industry',
				name: 'industry',
				type: 'text',
				placeholder: 'Enter industry'
			}
			// Add more basic information fields
		]
	},
	{
		label: 'Contact Information',
		group: 'Organization Information',
		fields: [
			{
				label: 'Email Address',
				name: 'email',
				type: 'email',
				placeholder: 'Enter email address'
			},
			{
				label: 'Contact Person',
				name: 'contactPerson',
				type: 'text',
				placeholder: 'Enter contact person'
			},
			{
				label: 'Mobile Number',
				name: 'mobileNumber',
				type: 'tel',
				placeholder: 'Enter mobile number'
			},
			{
				label: 'Alternate Email',
				name: 'alternateEmail',
				type: 'email',
				placeholder: 'Enter alternate email'
			},
			{
				label: 'Social Media Profiles',
				name: 'socialMediaProfiles',
				type: 'text',
				placeholder: 'Enter social media profiles'
			}
			// Add more contact information fields
		]
	},
	{
		label: 'Additional Information',
		group: 'Organization Information',
		fields: [
			{
				label: 'Year Established',
				name: 'yearEstablished',
				type: 'number',
				placeholder: 'Enter year established'
			},
			{
				label: 'Number of Employees',
				name: 'numEmployees',
				type: 'number',
				placeholder: 'Enter number of employees'
			},
			{
				label: 'Revenue',
				name: 'revenue',
				type: 'number',
				placeholder: 'Enter revenue'
			},
			{
				label: 'Business Description',
				name: 'businessDescription',
				type: 'text',
				placeholder: 'Enter business description'
			},
			{
				label: 'Legal Entity Type',
				name: 'legalEntityType',
				type: 'text',
				placeholder: 'Enter legal entity type'
			}
			// Add more additional information fields
		]
	},
	{
		label: 'Financial Information',
		group: 'Organization Information',
		fields: [
			{
				label: 'Bank Name',
				name: 'bankName',
				type: 'text',
				placeholder: 'Enter bank name'
			},
			{
				label: 'Account Number',
				name: 'accountNumber',
				type: 'text',
				placeholder: 'Enter account number'
			},
			{
				label: 'Routing Number',
				name: 'routingNumber',
				type: 'text',
				placeholder: 'Enter routing number'
			}
		]
	},
	{
		label: 'Work Information',
		group: 'Employee Information',
		fields: [
			{
				label: 'Employee ID',
				name: 'employeeId',
				type: 'text',
				placeholder: 'Enter employee ID'
			},
			{
				label: 'Department',
				name: 'department',
				type: 'text',
				placeholder: 'Enter department'
			},
			{
				label: 'Position',
				name: 'position',
				type: 'text',
				placeholder: 'Enter position'
			},
			{
				label: 'Start Date',
				name: 'startDate',
				type: 'date',
				placeholder: 'Enter start date'
			},
			{
				label: 'End Date',
				name: 'endDate',
				type: 'date',
				placeholder: 'Enter end date'
			}
			// Add more work information fields
		]
	},
	{
		label: 'Salary Information',
		group: 'Employee Information',
		fields: [
			{
				label: 'Salary',
				name: 'salary',
				type: 'number',
				placeholder: 'Enter salary'
			},
			{
				label: 'Bank Account Number',
				name: 'bankAccountNumber',
				type: 'text',
				placeholder: 'Enter bank account number'
			},
			{
				label: 'Bank Routing Number',
				name: 'bankRoutingNumber',
				type: 'text',
				placeholder: 'Enter bank routing number'
			}
			// Add more salary information fields
		]
	}
	// Add more field groups as needed
];

export default OrganizationFormFields;
