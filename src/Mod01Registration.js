import React, {useState} from 'react';

import './App.js';

function Registration(){
const[fullname, setFullname] = useState('');
const[email, setEmail] = useState('');
const[birthday, setBirthday] = useState('');
const[age, setAge] = useState('');
const[gender, setGender] = useState('');
const[phonenum, setPhonenum] = useState('');
const[address, setAddress] = useState('');
const[cof, setCof] = useState('');
const[pet, setPet] = useState('');
const[econtname, setEcontname] = useState('');
const[econtnum, setEcontnum] = useState('');
const[comments, setComments] = useState('');
const[submitted, setSubmitted] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();
console.log('Submitted:', {fullname, email, birthday, age, gender, phonenum, address, cof, pet, econtname, econtnum, comments})
setSubmitted(true);

}

return(
    <div className="Registration"> 
        <header className='App-header'>
            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit} className="registration-form">
                <div>
                    <label htmlFor="fullname">Fullname:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input
                    className="form-control"
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                    className="form-control"
                    type="Age"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                    className="form-control"
                    type="Gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    >
                    <option value="" disabled>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="phonenum">Phone Number:</label>
                    <input
                    className="form-control"
                    type="tel"
                    id="phonenum"
                    pattern="09\d{2}-\d{3}-\d{4}"
                    placeholder="09XX-XXX-YYYY"
                    value={phonenum}
                    onChange={(e) => setPhonenum(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="cof">Course of Interest:</label>
                    <select
                    className="form-control"
                    type="list"
                    id="cof"
                    value={cof}
                    onChange={(e) => setCof(e.target.value)}
                    required
                    >
                    <option value="" disabled>Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="pet">Preferred Enrollment Term:</label>
                    <select
                    className="form-control"
                    type="list"
                    id="pet"
                    value={pet}
                    onChange={(e) => setPet(e.target.value)}
                    required
                    >
                    <option value="" disabled>Select a term</option>
                    <option value="first-sem">First Sem</option>
                    <option value="second-sem">Second Sem</option>
                    <option value="summer-sem">Summer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Econtname">Emergency Contact Name:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="econtname"
                    value={econtname}
                    onChange={(e) => setEcontname(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="econtnum">Emergency Contact Phone#:</label>
                    <input
                    className="form-control"
                    type="tel"
                    id="econtnum"
                    pattern="09\d{2}-\d{3}-\d{4}"
                    placeholder="09XX-XXX-YYYY"
                    value={econtnum}
                    onChange={(e) => setEcontnum(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="comments">Additional Comments:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    required
                    />
                </div>

                <button className="btn btn-success" type='submit'>Register</button>

            </form> 

            {submitted && (
                <p className="success-message">Registration Successful!</p>
            )}

        </header>

    </div>
);

}

export default Registration;

