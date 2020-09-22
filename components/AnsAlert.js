import Swal from 'sweetalert2';

export default (isCorrect) => {
    if (isCorrect == -1)
        Swal.fire({
            padding: "60px",
            position: 'center',
            type: 'success',
            title: 'Yay',
            text: 'Successfully registered !',
            showConfirmButton: false

        })
    if (isCorrect === 1)
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'success',
            type: 'success',
            title: 'You gave the correct answer',
            showConfirmButton: false

        })
    if (isCorrect === 0)
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'error',
            title: 'Oops! Wrong answer.',
            text: 'Try again',
            showConfirmButton: false

        })
        if (isCorrect === 9)
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'error',
            title: 'Times up!',
            text: 'Ahaaa sorry!',
            showConfirmButton: false

        })
        if (isCorrect === 8)
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'info',
            title: 'Error !',
            text: 'Looks like you are not logged in ;_;',
            showConfirmButton: false

        })



}