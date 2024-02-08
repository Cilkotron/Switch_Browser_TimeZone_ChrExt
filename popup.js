//console.log('This is a popup!');

//console.log(Intl.DateTimeFormat().resolvedOptions().timeZone

/* unction handlePermission() {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        report(result.state);
      } else if (result.state === "prompt") {
        report(result.state);
        navigator.geolocation.getCurrentPosition(
          revealPosition,
          positionDenied,
          geoSettings,
        );
      } else if (result.state === "denied") {
        report(result.state);
      }
      result.addEventListener("change", () => {
        report(result.state);
      });
    });
  }
  
  function report(state) {
    console.log(`Permission ${state}`);

  }
  
  handlePermission(); */

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);





