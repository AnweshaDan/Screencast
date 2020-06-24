import Swal from 'sweetalert2';

export default (isCorrect) => {
    if (isCorrect == -1)
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Oops',
            text: 'You are not logged in',
            showConfirmButton: false
            
        })
    if (isCorrect === 1)
        Swal.fire({
            position: 'top-end',
            icon:'success',
            type: 'success',
            title: 'You gave the correct answer',
            showConfirmButton: false
            
        })
    if (isCorrect === 0)
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops! Wrong answer.',
            text: 'Try again',
            showConfirmButton: false
        
      })
            
       
}