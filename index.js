const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener('click', mappingSRUtoSRD);

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', clearValues);

// SRU VALUES
const SRUminX = 0;
const SRUmaxX = 10;
const SRUminY = 0;
const SRUmaxY = 8;
// SRD VALUES
const SRDminX = 0;
const SRDmaxX = 1024;
const SRDminY = 0;
const SRDmaxY = 768;

function mappingSRUtoSRD () {
  const SRUcoordX = document.getElementById("SRUcoordinateX").value;
  const SRUcoordY = document.getElementById("SRUcoordinateY").value;
  
  const SRDcoordX = (SRUcoordX * 1024)/10;
  const SRDcoordY = ((SRUcoordY * -768)/8) + 768;
  
  document.getElementById("SRDcoordinateX").innerText = SRDcoordX;
  document.getElementById("SRDcoordinateY").innerText = SRDcoordY;  
}

function clearValues() {
  document.getElementById("SRUcoordinateX").value = '';
  document.getElementById("SRUcoordinateY").value = '';
  document.getElementById("SRDcoordinateX").innerText = '';
  document.getElementById("SRDcoordinateY").innerText = '';  
}