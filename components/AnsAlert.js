import Swal from 'sweetalert2';

export default (isCorrect) => {
    if (isCorrect == -1)
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Completed',
            text: 'Congrats!!!',
            showConfirmButton: false,
            timer: 1500
        })
    if (isCorrect === 1)
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'You Gave the correct Answer',
            showConfirmButton: false,
            timer: 1500
        })
    if (isCorrect === 0)
        Swal.fire({
            position: 'top-end',
            title: 'You Gave the Wrong answer',
            text: 'Read the question carefully',
            type: 'error',
            showConfirmButton: false
        })
}