'use client';
import {
	PayPalButtons,
	PayPalScriptProvider,
	ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';

interface PayPalButtonProps {
	amount: number;
	onSuccess: () => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
	const scriptOptions: ReactPayPalScriptOptions = {
		clientId: process.env.PAYPAL_CLIENT_ID || ''
	};

	return (
		<PayPalScriptProvider options={scriptOptions}>
			<PayPalButtons
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: amount.toFixed(2)
								}
							}
						]
					});
				}}
				onApprove={(data, actions) => {
					if (actions.order) {
						return actions.order.capture().then((details) => {
							onSuccess();
						});
					}
					return Promise.resolve(); // Return a resolved Promise<void> when actions.order is undefined
				}}
			/>
		</PayPalScriptProvider>
	);
};

export default PayPalButton;
