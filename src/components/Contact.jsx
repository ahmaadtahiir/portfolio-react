import React from 'react'
import { useRef } from 'react'
// React Hot Toast
import toast, { Toaster } from 'react-hot-toast'
// Material UI
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// Send Email
import emailjs from '@emailjs/browser'
// Material Icons
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined'

const Contact = () => {
    const form = useRef()
    const contactInfo = [
        { id: 1, avatar: PersonPinCircleOutlinedIcon, title: 'Address', detail: 'Gullberg III, Lahore, Pakistan' },
        { id: 2, avatar: EmailOutlinedIcon, title: 'Mail', detail: 'ahmaadtahiir@gmail.com' },
        { id: 3, avatar: LocalPhoneOutlinedIcon, title: 'Phone', detail: '+92 343 638 4441' },
        { id: 4, avatar: AttachmentOutlinedIcon, title: 'LinkedIn', detail: 'linkedin.com/in/ahmaadtahiir' },
    ]
    {/*FUNTIONALITY TO SEND FORM DETAILS */}
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_7hftkxc', 'template_nordhna', form.current, 'j1LahpVUZUFXda2x2')
            .then((result) => {
                console.log(result.text)
                toast.success('Message send successfully!', { id: 'successMessage', })
            }, (error) => {
                console.log(error.text)
                toast.success('Error in sending message', { id: 'errorMessage', })
            })
    }
    return (
        // <div className="bg-gray-200 px-40 py-10" id="contact">
        //     <Grid container spacing={2}>
        //         <Grid item md={6} sx={12}>
        //             <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent pt-10 mr-20">Contact Information</span>
        //             <div className="mr-20 mt-10 rounded-lg shadow-md">
        //                 <List
        //                     sx={{
        //                         width: '100%',
        //                         padding: '20px',
        //                         bgcolor: 'background.gray',
        //                         borderStyle: 'solid',
        //                         borderWidth: '1px',
        //                         borderColor: '#374151',
        //                         borderRadius: '10px',
        //                     }}
        //                 >
        //                     {
        //                         contactInfo.map((contact) => (
        //                             <ListItem>
        //                                 <ListItemAvatar>
        //                                     <Avatar sx={{ bgcolor: '#374151' }}>
        //                                         <contact.avatar />
        //                                     </Avatar>
        //                                 </ListItemAvatar>
        //                                 <ListItemText
        //                                     sx={{ color: '#374151' }}
        //                                     primary={contact.title}
        //                                     secondary={contact.detail}
        //                                 />
        //                             </ListItem>
        //                         ))
        //                     }
        //                 </List>
        //             </div>
        //         </Grid>
        //         <Grid item md={6} sx={12}>
        //             <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent pt-10 ml-20">Write me your project</span>
        //             <form className="ml-20 mt-10" ref={form} onSubmit={sendEmail}>
        //                 <label className="block mb-2 text-xl font-Economica text-gray-500">Name</label>
        //                 <input className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-0 shadow-md" type="text" name="user_name" />
        //                 <label className="block mb-2 text-xl font-Economica text-gray-500 mt-1">Email</label>
        //                 <input className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-0 shadow-md" type="email" name="user_email" />
        //                 <label className="block mb-2 text-xl font-Economica text-gray-500 mt-1">Project</label>
        //                 <textarea className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-0 shadow-md" type="text" name="user_message" rows="6" />
        //                 <button onClick={sendEmail} className="flex px-10 py-3 mt-4 text-xl font-Economica font-semibold text-center text-white font-family:cursive bg-gray-700 rounded-lg hover:bg-gray-600" type="submit">Send message  &nbsp;
        //                     <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth="1.5" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                         <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="none" />
        //                         <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //                     </svg>
        //                 </button>
        //             </form>
        //         </Grid>
        //     </Grid>
        //     <Toaster
        //         position='top-center'
        //         toastOptions={{
        //             duration: 2000,
        //         }}
        //         reverseOrder={true} />
        // </div>
        <div name="contact" className="w-full h-screen bg-gray-200">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 pt-10 md:flex-row sm:pt-0">
                <div className="h-full w-full flex flex-col justify-center sm:w-1/2">
                    {/* CONTACT SECTION */}
                    <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent">Contact Information</span>
                    {/* LIST OF CONTACT INFO */}
                    <div className="mt-4 rounded-lg shadow-md sm:mr-5 sm:mt-8">
                        <List
                            sx={{
                                width: '100%',
                                paddingX: '20px',
                                paddingY: '0px',
                                bgcolor: 'background.gray',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: '#374151',
                                borderRadius: '10px',
                            }}
                        >
                            {
                                contactInfo.map((contact) => (
                                    <ListItem key={contact.id}>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: '#374151' }}>
                                                <contact.avatar />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ color: '#374151', }}
                                            primary={<Typography style={{ fontFamily: 'Economica', fontSize: '18px' }}>{contact.title}</Typography>}
                                            secondary={<Typography style={{ fontFamily: 'Economica', fontSize: '18px' }}>{contact.detail}</Typography>}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                </div>
                {/* PROJECT SECTION */}
                <div className="h-full w-full flex flex-col justify-center sm:w-1/2 sm:ml-5">
                    <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent">Write me your project</span>
                    {/* FORM */}
                    <form className="mt-0 sm:mt-8" ref={form} onSubmit={sendEmail}>
                        <label className="flex justify-start text-lg font-Economica text-gray-500 sm:text-xl">Name</label>
                        <input className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-0 shadow-md" type="text" name="user_name" required/>
                        <label className="flex justify-start text-lg font-Economica text-gray-500 mt-1 sm:text-xl">Email</label>
                        <input className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-0 shadow-md" type="email" name="user_email" required/>
                        <label className="flex justify-start text-lg font-Economica text-gray-500 mt-1 sm:text-xl">Project</label>
                        <textarea className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-0 shadow-md" type="text" name="user_message" rows="4" required/>
                        <button onClick={sendEmail} className="flex px-5 py-2 mt-2 text-md font-Economica text-center text-white font-family:cursive bg-gray-700 rounded-lg hover:bg-gray-600 sm:text-xl sm:px-10 sm:mt-4" type="submit">Send message  &nbsp;
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth="1.5" stroke="#E5E7EB" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="none" />
                                <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <Toaster
                position='top-center'
                toastOptions={{
                    duration: 2000,
                }}
                reverseOrder={true} />
        </div>
    )
}

export default Contact