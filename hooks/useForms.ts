import { useState, useEffect } from "react";

const useForm = (callback: any, validate: any) => {
	const [values, setValues] = useState<any>({});
	const [errors, setErrors] = useState<any>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (e) e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		if (e.persist) e.persist();
		if (e.target.type === "checkbox") {
			const event = e as React.ChangeEvent<HTMLInputElement>;
			setValues((values: any) => ({
				...values,
				[event.target.name]: event.target.checked
			}));
		} else {
			setValues((values: any) => ({
				...values,
				[e.target.name]: e.target.value
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
		errors
	};
};

export default useForm;
