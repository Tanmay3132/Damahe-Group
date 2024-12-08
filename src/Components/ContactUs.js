import React, { useState } from "react";
import { Box, TextField, Button, Container, Snackbar, Alert, Paper, Grid, InputAdornment, CircularProgress } from "@mui/material";
import { Send as SendIcon, Person as PersonIcon, Email as EmailIcon, Subject as SubjectIcon, Message as MessageIcon } from "@mui/icons-material";
import axios from "axios";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
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
        if (!formData.phone.trim()) newErrors.message = "phone Number is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            console.log(e);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const paylaod = {
                messaging_product: "whatsapp",
                to: "919359617608",
                type: "template",
                template: {
                    name: "customerdetails",
                    language: {
                        code: "en",
                    },
                    components: [
                        {
                            type: "body",
                            parameters: [
                                {
                                    type: "text",
                                    text: JSON.stringify(formData),
                                },
                            ],
                        },
                    ],
                },
            };
            const headers = {
                headers: {
                    Authorization: `Bearer EAAbQZCfrpik0BOZCF3ZAPW5OY8axHm8B8NpcjOSbZCjVhwtHNrehnp3A0fy6t5OSVd0lbpPnkx5SvPOuCZCCSZAvywE09lRs3sHZByf4S3K09ZCVLKzMufPfmZAHIpLSMAcFGEvEUJ3j7uJtLiKyLnhrP2vqxjjoEdCDXfkGXrlygXpRxhyEqPHnyuFqorTj2UdNcpfbNCl9V5SACOFsCcGCKdy7rP5IZD`,
                },
            };
            const response = await axios.post("https://graph.facebook.com/v21.0/112578155105976/messages", paylaod, headers);
            debugger;
            console.log(response);
            console.log("Form submitted:", formData);
            setOpenSnackbar(true);
            setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
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
                                label="Phone Number"
                                name="phone"
                                type="number"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
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
                        <Grid item xs={6}>
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
