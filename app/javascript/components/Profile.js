// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
// import { withRouter } from 'react-router-dom'
// ​
// const initialState = {
// 	pronouns: "",
// 	name: ""
//   };
// const Profile = ({ onAddProfile, history, user }) => {
// 	const [formData, setFormData] = useState(initialState);
// ​
// ​
// 	function handleChange(e) {
// 		setFormData({
// 		  ...formData,
// 		  [e.target.id]: e.target.value,
// 		});
// 	  }
// ​
// 	  function handleSubmit(e) {
// 		e.preventDefault();
// 		console.log(formData)
// 		fetch("/profile", {
// 		  method: "POST",
// 		  headers: {
// 			"Content-Type": "application/json",
// 		  },
// 		  body: JSON.stringify({...formData, user_id: user.id}),
// 		})
// 		  .then((r) => r.json())
// 		  .then((newProfile) => {
// 			setFormData(initialState);
// 			onAddProfile(newProfile);
// 		  });
// 		  console.log("hey")
// 		  history.push('/myprofile')
// 	  }
// 	return (
// 		<div>
// 		<center>
// 		<h1 className="profile-header">Create Your Profile</h1>
// 		<div className="profile-card">
// 		<form onSubmit={handleSubmit}>
// 		   <label htmlFor="Pronouns"></label>
// 		   <br/>
// 		   <input 
// 		   type="text"
// 			id="pronouns"
// 			value={formData.pronouns}
// 			onChange={handleChange}
// 		   />
// 		   <br />
// 		   <FormText style={{fontSize: "11px"}}>He/Him, She/Her, Them/They</FormText>
// 		 <div style={{marginTop: "10px"}}>
		   
// 		   <br />
		   
// 		   <a style={{textDecoration: "none", fontSize: "12px", color: "#9D7E68"}} href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" target="blank">Calculate BMI here if you don't know it</a>
// 		 </div>
//         <Label htmlFor="initiatives" style={{marginTop: "5px", marginBottom: "5px" }}>How do you feel about DEI initiatives in your workplace?</Label>
// 		<span style={{fontSize: "10px", marginRight: "5px"}}> <br /> not satisfied🥲</span> 
//         <Input type="range" name="range" id="exampleRange" />
// 		<span style={{fontSize: "10px", marginRight: "5px"}}> pretty satisfied😁</span> 
// 		 <div className="position-relative" style={{marginTop: "10px"}}>
// 		   <br />
//            <Label htmlFor="inclusion">Do you believe inclusion and DEI education will make the world a better place?</label>
//            <span style={{fontSize: "10px", marginRight: "5px"}}> <br /> Yes</span> 
//         <Input type="range" name="range" id="exampleRange" />
// 		<span style={{fontSize: "10px", marginRight: "5px"}}> No</span> 
// 		 <div className="position-relative" style={{marginTop: "10px"}}></div>

// 		   <br />
// 		   <input 
// 		   input ="text"
// 		   id="inclusion"
// 		   value={formData.inclusion}
// 		   onChange={handleChange}
// 		    />
// 			<br />
		   
// 	   <Button style={{backgroundColor: "#9D7E68", marginBottom: "8px", width: '100px'}}>
//          Submit
// 	   </Button>
// 	   </form>
// 	   </div>
// 	   </center>
// 	   </div>
// 	)
// }
// ​
// export default withRouter(Profile);


