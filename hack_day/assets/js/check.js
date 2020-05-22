auth_token = '9247c75076aeb27e17d73a24f19540e97d2a09ac1dd91d84b4eb2f7b8a3cffdf';
document.getElementById('buttn_click').addEventListener('click', checkGrade);


function checkGrade() {
  let proj_id = document.getElementById('proj_id').value;
  fetch(`https://intranet.hbtn.io/projects/${proj_id}.json?auth_token=${auth_token}`, {
      mothod: 'GET',
      headers: {
        'mode': '*cors',
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      arr_tasks = [];
      tasks = data.tasks;
      for (eaTask of tasks) {
        arr_tasks.push(eaTask.id)
      }
      // console.log(tasks);
      // console.log(arr_tasks);
      getRequestIDs(arr_tasks);
    })
    .catch((err) => console.log(err))


}

function getRequestIDs(arr_tasks) {
  correction_ids = [];

  for (ea_task of arr_tasks) {
    fetch(`https://intranet.hbtn.io/tasks/${ea_task}/start_correction.json?auth_token=${auth_token}`, {
        method: 'POST',
        headers: {
          'mode': '*cors',
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        correction_ids.push(data.id)
        console.log(correction_ids)
      })
      .catch((err) => console.log(err))
  }
}


function getRequestIDs(arr_tasks) {
  correction_ids = [];

  for (ea_task of arr_tasks) {
    fetch(`https://intranet.hbtn.io/tasks/${ea_task}/start_correction.json?auth_token=${auth_token}`, {
        method: 'POST',
        headers: {
          'mode': '*cors',
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        var temp = correction_ids.push(data.id)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
  
  // correctionID(correction_ids)
  // function correctionID(correction_id_list) {
  //   alert(correction_id_list)
  //   for (ea_id of correction_id_list) {
  //     fetch(`https://intranet.hbtn.io/correction_requests/${ea_id}.json?auth_token=${auth_token}`, {
  //         method: 'GET',
  //         headers: {
  //           'mode': '*cors',
  //           'Accept': 'application/json, text/plain, */*',
  //           'Content-type': 'application/json'
  //         }
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.result_display.checks)
  //       })
  //       .catch((err) => console.log(err))
  //   }
  }
// }
