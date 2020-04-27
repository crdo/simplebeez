import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (e) => {
		if (e) e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		if (e.persist) e.persist();
		if (e.target.type === "checkbox") {
			const event = e;
			setValues((values) => ({
				...values,
				[event.target.name]: event.target.checked,
			}));
		} else {
			setValues((values) => ({
				...values,
				[e.target.name]: e.target.value,
			}));
		}
	};

	function clearForm() {
		setIsSubmitting(false);
		setValues({});
		setErrors({});
	}

	return {
		handleChange,
		handleSubmit,
		clearForm,
		setValues,
		values,
		errors,
	};
};

export default useForm;
