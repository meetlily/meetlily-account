'use client';

import React, { useState } from 'react';

// Import the JSON configuration object
import paymentFormConfig from '@/data/modules/payment/fields.json'; // Replace with the actual path to your JSON file

interface PaymentData {
	[fieldName: string]: string | number;
}

interface FieldWithSelect {
	name: string;
	label: string;
	type: 'select';
	options: string[];
	required: boolean;
	placeholder?: string;
	displayCondition?: string;
}

interface FieldWithInput {
	name: string;
	label: string;
	type: 'text' | 'email' | 'number';
	placeholder: string;
	required: boolean;
	displayCondition?: string;
	options?: never;
}

type PaymentFormField = FieldWithSelect | FieldWithInput;

const PaymentModule: React.FC = () => {
	const [paymentData, setPaymentData] = useState<PaymentData>({});
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setPaymentData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedPaymentMethod(e.target.value);
	};

	const filteredFields = paymentFormConfig.fields.filter((field) => {
		if (!selectedPaymentMethod) {
			return true; // Show all fields if no payment method is selected
		}
		return !field.displayCondition || field.displayCondition === selectedPaymentMethod;
	});

	const renderFields = () => {
		return filteredFields.map((field) => {
			return (
				<div key={field.name}>
					<label htmlFor={field.name}>{field.label}</label>
					{field.type === 'select' ? (
						<select
							id={field.name}
							name={field.name}
							value={paymentData[field.name] || ''}
							onChange={handleInputChange}
							required={field.required}
						>
							{field.options?.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					) : (
						<input
							type={field.type}
							id={field.name}
							name={field.name}
							value={paymentData[field.name] || ''}
							//onChange={handleInputChange}
							placeholder={field.placeholder}
							required={field.required}
						/>
					)}
				</div>
			);
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate payment processing or handle the payment data submission
		console.log('Payment Data:', paymentData);
	};

	return (
		<div>
			<h2>Payment Module</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Payment Method:</label>
					{paymentFormConfig.fields
						.filter((field) => field.name === 'paymentMethod')
						.map((field) =>
							field.options?.map((option) => (
								<label key={option}>
									<input
										type="radio"
										name="paymentMethod"
										value={option}
										onChange={handlePaymentMethodChange}
										checked={selectedPaymentMethod === option}
										required={field.required}
									/>{' '}
									{option}
								</label>
							))
						)}
				</div>
				{renderFields()}
				<button type="submit">Submit Payment</button>
			</form>
		</div>
	);
};

export default PaymentModule;
