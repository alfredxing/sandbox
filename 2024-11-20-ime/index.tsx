import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

function Index() {
	const [value, setValue] = useState('');
	const onChange = useCallback((e) => {
		const value = e.target.value;

		// Setting the value synchronously handles IME correctly
		// setValue(value);

		// Setting the value async does not
		requestAnimationFrame(() => {
			setValue(value);
		});
	}, []);

	return <input type="text" value={value} onChange={onChange} />;
}

createRoot(document.getElementById('root')!).render(<Index />);
