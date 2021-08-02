const user = {
   username : "apidoc",
   password : "!3Derm2021",
   firstname : "Automation",
   lastname : "Tester",
   DOB : "23/01/1969",
   address: "ACP",
   city : "Angeles",
   postcode : "2525",
   contact : "5507891",
   medicare : "0000052545",
   lab : [
      'BSP - Barratt And Smith Pathology',
      'CAP - Capital Pathology',
      'CLI - Clinipath Pathology',
      'CPL - Clinpath Pathology',
      'DHM - Douglas Hanly Moir Pathology',
      'DSP - Diagnostic Services',
      'HOB - Hobart Pathology',
      'LAU - Launceston Pathology',
      'MPS - Melbourne Pathology',
      'NWP - North West Pathology',
      'SNP - Sullivan Nicolaides Pathology',
      'SOP - Southern Iml Pathology',
      'WWG - Wagga Pathology'
   ],
   state : [
      'ACT',
      'NSW',
      'NT',
      'QLD',
      'SA',
      'TAS',
      'VIC',
      'WA',
   ],
   validMessage:[
      "Please enter a first name. Allowed characters: a-z,A-Z,-,',`.",
      "Please enter a last name. Allowed characters: a-z,A-Z,-,',`.",
      "Please select a gender.",
      "Please enter a valid date of birth.",
      "Please enter an address. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
      "Please enter a suburb / town. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
      "Please select a state.",
      "Please enter a postcode. Allowed characters: 0-9.",
      "Please enter a contact number. Allowed characters: 0-9,+,-, (,).",
      "Please enter a DVA number. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
   ],
   validNoteMessage: "Please enter a clinical notes. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
   billing:{
      DVA: "S",
      bulkBill: "D",
      private: "P"
   },
   
   titleTop: {
      dashboard: "Dashboard",
      patientDetails: "Add patient details",
      addLesionDetails: "Add lesion details",
      lesionDetails: "Lesion Details",
      confirmDetails: "Confirm request details",
   },

   gender: {
      female : 'Female',
      male : 'Male',
      other : 'Other',
      unknown : 'Unknown',
   },

   locaton: [
      'Please Select One',
      'Abdomen',
      'Back',
      'Buttock',
      'Chest',
      'Ear',
      'Eyelid',
      'Finger',
      'Finger palmar',
      'Foot',
      'Foot plantar',
      'Forearm (elbow and below)',
      'Genitalia'
   ]
};

export default user
