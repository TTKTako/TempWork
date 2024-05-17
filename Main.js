function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const header = ['HRNumber','Date','Name','Age','DrugUsed','DrugAllergy','Diseases','Diagnosis','SurgeryPlan','SurgeryType','Surgery','Screenlab','Lab']

// const dataObjectsTemp = [
//   {
//     HRNumber: "1234",
//     Date: '5/16/2024',
//     Name: "Test SaveData",
//     Age: 16,
//     DrugUsed: "ยาละลายลิ่มเลือด",
//     DrugAllergy: "ไม่มี",
//     Diseases: "เบาหวาน",
//     Diagnosis: "การวินิจฉัย",
//     SurgeryPlan: "แผนการผ่าตัด",
//     SurgeryType: "Laparotomy",
//     Surgery: "Major surgery",
//     Screenlab: "Oncologic surgery",
//     Lab: "asdadsadsad",
//   },
// ];

function getDates() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('DateSave').value = today;
}
window.onload = function () {
  getDates();
};

function Analyse() {

  var labResult = "";

  const data = {
    DateSave: document.getElementById('DateSave').value,
    HR: document.getElementById('HR').value,
    Name: document.getElementById('Name').value,
    Age: document.getElementById('Age').value,
    HavepillUse1: document.getElementById('HavepillUse1').checked,
    HavepillUse2: document.getElementById('HavepillUse2').checked,
    HavepillUse3: document.getElementById('HavepillUse3').checked,
    HavepillExplanHistory: document.getElementById('HavepillExplanHistory').value,
    NotHavepill: document.getElementById('NotHavepill').checked,
    Havepill: document.getElementById('Havepill').checked,
    HavepillExplan: document.getElementById('HavepillExplan').value,
    NotHavedes: document.getElementById('NotHavedes').checked,
    Havedes1: document.getElementById('Havedes1').checked,
    Havedes2: document.getElementById('Havedes2').checked,
    Havedes3: document.getElementById('Havedes3').checked,
    Havedes4: document.getElementById('Havedes4').checked,
    Havedes5: document.getElementById('Havedes5').checked,
    HavedesExplan: document.getElementById('HavedesExplan').value,
    Prop1: document.getElementById('Prop1').value,
    Prop2: document.getElementById('Prop2').value,
    TypeOparation1: document.getElementById('TypeOparation1').checked,
    TypeOparation2: document.getElementById('TypeOparation2').checked,
    surgeryMinor: document.getElementById('surgeryMinor').checked,
    surgeryMajor: document.getElementById('surgeryMajor').checked,
    Minor: document.getElementById('Minor').checked,
    Major: document.getElementById('Major').checked,
    Oncologic: document.getElementById('Oncologic').checked
  };

  console.log();

  if (data.Age > 45) {

    if (data.Minor == true) {
      labResult = labResult + "CBC, CXR, EKG, "
    } else if (data.Major == true) {
      labResult = labResult + "CBC, CXR, EKG, Cr., E'lytes, BS, anti-HIV, HBsAg, VDRL, bl.gr., "
    } else if (data.Oncologic == true) {
      labResult = labResult + "CBC, CXR, EKG, Cr., E'lytes, BS, anti-HIV, HBsAg, VDRL, bl.gr., "
    }

  } else if (data.Age <= 45) {

    if (data.Minor == true) {
      labResult = labResult + "CBC, "
    } else if (data.Major == true) {
      labResult = labResult + "CBC, CXR, anti-HIV, HBsAg, VDRL, bl.gr., "
    } else if (data.Oncologic == true) {
      labResult = labResult + "CBC, CXR, Cr., E'lytes, anti-HIV, HBsAg, VDRL, bl.gr., "
    }

  }

  if (data.Havedes1 == true) {
    labResult = labResult + "HbA1C, "
  }
  if (data.Havedes2 == true) {
    labResult = labResult + "TFT, "
  }
  if (data.Havedes3 == true && data.Age <= 45) {
    labResult = labResult + "EKG, "
  }
  if (data.Havedes4 == true) {
    labResult = labResult + "coagulogram, "
  }
  if (data.Havedes5 == true) {
    labResult = labResult + "LFT, "
  }

  if (data.Age == 0 || data.HR == 0 || data.Name == "") {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    alert("Missing require data!!")
    return
  }

  alert("Lab results:\n" + labResult)


}