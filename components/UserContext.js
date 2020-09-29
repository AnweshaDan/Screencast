/*useEffect( () => {
    loadComp();
},[]);
    

    
    
    
  

  const loadComp= async()=>
  {

    const response=await axios.get(data.api+"/api/status")
      
        console.log(response);
        if(response.data.status==404)
        Router.push('/error')
        var temp=new Date(response.data.start_time);
        setStart(temp.getTime() + (temp.getTimezoneOffset() * 60000));        
        let temp2 = new Date(response.data.end_time);
        setEnd(temp2.getTime() + (temp2.getTimezoneOffset() * 60000));
        setDay(response.data.current_day)

        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("day",day);
        //if(localStorage.getItem('email'))
        console.log(localStorage.getItem('start') )
        if(localStorage.getItem('day')==3 && (localStorage.getItem('end') < Date.now()) )
              Router.push('/game_finale')
        
        
        if (localStorage.getItem('email') && (localStorage.getItem('start') < Date.now()))
        {
          Router.push('/game')
          //console.log(Date.now()+"    "+localStorage.getItem('start'))
          //Router.push('/game')
        }
       
         

        //if(localStorage.getItem('end') < Date.now()) Router.push('/finale2');
      

  }*/
