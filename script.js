fetch('/health')
    .then(response => response.json())
    .then(data => {
        const uptime = document.getElementById('uptime');
        const timestamp = document.getElementById('timestamp');
        const status = document.getElementById('status');
        const name = document.getElementById('nama');
        const nrp = document.getElementById('nrp');
        const departemen = document.getElementById('departemen');

        uptime.innerText = data.uptime;
        timestamp.innerText = data.timestamp;
        status.innerText = data.status;
        name.innerText = data.nama;
        nrp.innerText = data.nrp;
        departemen.innerText = data.departemen;
    })
    .catch(error => console.error('Error fetching health data:', error));