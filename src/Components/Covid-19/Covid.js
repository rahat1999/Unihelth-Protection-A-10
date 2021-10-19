import React from 'react';
import { Container } from 'react-bootstrap';

const Covid = () => {
    return (
        <div className=''>
            <br />
            <br />
            <Container>
                <div className="shadow-lg rounded p-4">
                    <h2 id="covid" className="text-center text-primary mb-3">Covid Info</h2>
                    <div >

                        <article>
                            <h4>What to do if you suspect you have COVID-19</h4>
                            <p>
                                ~~If you are showing signs of possible COVID-19 symptoms, please take one of these steps:
                                <li>Use the Check Symptoms tool through Patient Online Services or the Mayo Clinic app for an immediate recommendation based on your symptoms.</li>
                                <li> Call our COVID-19 Nurse Line at 507-293-9525.
                                    Contact your local health care provider.</li>
                                <li>If you meet testing criteria, you will be directed to one of our local testing sites.</li>
                            </p>
                        </article>
                        <article>
                            <h2>Appointment availability and visitor restrictions</h2>
                            <p>
                                If you'd like to make an appointment, visit our Request an Appointment page and select the location at which you'd like to be seen. COVID-19 testing may be required for patients who are scheduled for a consultation, treatment, procedure or surgery. In addition to in-person appointments and consultations, we offer other opportunities to receive care at home or another comfortable locations. Learn more about these convenient care options.
                                <br />
                                <b>We require staff, patients and visitors to wear a face covering or mask to slow the spread of COVID-19:</b>
                                <br />
                                <li>Acceptable masks on Mayo Clinic campuses
                                </li>
                                <li>CDC face mask recommendations
                                </li>
                                <li>
                                    Learn how to wear and care for your mask
                                </li>
                                Depending on local COVID-19 trends, some Mayo Clinic Health System locations may have temporary service changes for the protection of patients and staff. These changes may include restricting visitors, delaying elective visits, adjusting hours or shifting to alternative appointment types, such as video or phone visits.
                            </p>
                        </article>
                        <article>
                            <h2>What do I need to know about my in-person appointment?</h2>
                            <h4>Prior To Arriving:</h4>
                            <p>We will ask you a few questions when you schedule your appointment to help identify any symptoms or recent exposures you may have had to COVID-19.
                                Appointment reminders will be sent, as per normal method and frequency.</p>
                            <h5>If you've had a positive COVID-19 test within 90 days of your appointments:</h5>
                            <p>Please inform your scheduling team and bring a printed copy of your positive COVID-19 PCR testing results with you, as it may avoid retesting or delays in your care. Only PCR tests, also known as molecular tests, can be accepted.</p>
                            <h4>During Appointment:</h4>
                            <li>Patients, visitors and staff are required to wear a mask to decrease the risk of COVID-19 exposure.  Please bring your own face mask or covering to wear while at Mayo. The Centers for Disease Control and Prevention has details on appropriate face coverings.  </li>
                            <li>You are also being asked to not bring children under age 13 unless they are actively receiving care in the clinic setting.</li>
                            <li>Due to additional screening activities when entering Mayo Clinic Health System buildings, please allow extra time upon arrival (approximately 15 minutes).  </li>
                            <li>Valet services are not available.</li>
                        </article>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Covid;