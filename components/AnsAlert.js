
import Swal from 'sweetalert2';

export default (isCorrect) => {
    
    if (isCorrect === 1)
    {
        let timerInterval;
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'success',
            type: 'success',
            title: 'You gave the correct answer',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            willOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
            })


    }
            if (isCorrect === 0)
            {   let timerInterval
                Swal.fire({
                    padding: "60px",
                    position: 'center',
                    icon: 'error',
                    title: 'Oops! Wrong answer.',
                    text: 'Try again',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    willOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }  
        

            })
    }
        if (isCorrect === 9)
        {
            
            Swal.fire({
                padding: "60px",
                position: 'center',
                icon: 'error',
                title: 'Times up!',
                text: 'Ahaaa sorry!',
                showConfirmButton: false,
                
               

        })
    }
        
        if (isCorrect === 8)
        Swal.fire({
            padding: "60px",
            position: 'center',
            icon: 'info',
            title: 'Error !',
            text: 'Aha prohibited ! ;_;',
            showConfirmButton: false

        })



}