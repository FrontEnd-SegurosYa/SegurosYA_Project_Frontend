const dataFetch = async () => {
    const data = await (
      await fetch("http://3.89.34.248:8080/api/auto/listar")
    ).json();    
    // set state when the data received
    setListaAutos(data);
    console.log(data);
  };   