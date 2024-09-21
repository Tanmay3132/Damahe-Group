import React, { useState } from "react";
import { Box, TextField, Button, Container, Snackbar, Alert, Paper, Grid, InputAdornment, CircularProgress } from "@mui/material";
import { Send as SendIcon, Person as PersonIcon, Email as EmailIcon, Subject as SubjectIcon, Message as MessageIcon } from "@mui/icons-material";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form submitted:", formData);
            setOpenSnackbar(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };

    const bgColor = "#fcf7f0";
    return (
        <Container maxWidth="md">
            <Paper elevation={0} sx={{ mt: 4, mb: 4, p: 4, borderRadius: 2, background: "transparent" }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: bgColor }}
                                required
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ backgroundColor: bgColor }}
                                required
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                sx={{ backgroundColor: bgColor }}
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                error={!!errors.subject}
                                helperText={errors.subject}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SubjectIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                sx={{ backgroundColor: bgColor }}
                                fullWidth
                                multiline
                                rows={4}
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MessageIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                endIcon={isSubmitting ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
}
