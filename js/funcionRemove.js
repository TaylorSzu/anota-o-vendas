function fim(value) {
    var pendentes = localStorage.getItem('pendentes');
    if (pendentes) {
      pendentes = JSON.parse(pendentes);
      var index = pendentes.findIndex(i => i.id == value);
      if (index !== -1) {
        pendentes.splice(index, 1);
        localStorage.setItem('entregues', (Number(localStorage.getItem('entregues') || 0) + 1))
        localStorage.setItem('pendentes', JSON.stringify(pendentes));
        location.reload()
      }
    }
  }