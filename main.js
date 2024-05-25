$(document).ready(function() {
    // Display all clients initially
    displayClients(clientes);

    // Filter clients based on search input
    $("#searchInput").on("keyup", function() {
        var searchText = $(this).val().toLowerCase();
        var searchField = $("#searchField").val();
        $(".card").each(function() {
            var clientValue = $(this).find("." + searchField).text().toLowerCase();
            if (clientValue.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Open modal to add new client
    $("#addClientBtn").on("click", function() {
        $("#addClientModal").show();
    });

    // Close modal
    $(".close").on("click", function() {
        $("#addClientModal").hide();
    });

    // Add new client
    $("#addClientForm").on("submit", function(event) {
        event.preventDefault();
        var newClient = {
            name: $("#clientName").val(),
            phone: $("#clientPhone").val(),
            email: $("#clientEmail").val(),
            image: $("#clientImage").val()
        };
        clientes.push(newClient);
        displayClients(clientes);
        $("#addClientModal").hide();
        this.reset();
    });

    // Delete client
    $(document).on("click", ".delete-button", function() {
        var index = $(this).data("index");
        clientes.splice(index, 1);
        displayClients(clientes);
    });

    // Edit client (functionality needs to be implemented)
    $(document).on("click", ".edit-button", function() {
        // Code to edit client goes here
        alert("Editar cliente no implementado aún.");
    });
});

// Sample client data
var clientes = [
    {
        name: "Birham Fernandez",
        phone: "6641234567",
        email: "birham@gmail.com",
        image: "imagenes/birham.jpg"
    },
    {
        name: "Adriano Condines",
        phone: "6649876543",
        email: "elguapo@gmail.com",
        image: "imagenes/adriano.jpg"
    },
    {
        name: "Noel Santiañez",
        phone: "6643334444",
        email: "noel@gmail.com",
        image: "imagenes/noel.jpg"
    },
    {
        name: "Javier Pastor",
        phone: "6195556666",
        email: "enrique@hotmail.com",
        image: "imagenes/javi.jpg"
    },
    {
        name: "Bruno Fandiño",
        phone: "6645557777",
        email: "gitano@gmail.com",
        image: "imagenes/fandiño.jpg"
    }
];

// Display clients
function displayClients(clientes) {
    var clientsList = $("#clientsList");
    clientsList.empty();
    clientes.forEach(function(cliente, index) {
        var clientCard = `
            <div class="card">
                <button class="edit-button" data-index="${index}"></button>
                <button class="delete-button" data-index="${index}"></button>
                <img src="${cliente.image}" alt="Foto de ${cliente.name}">
                <h3 class="name">${cliente.name}</h3>
                <p class="phone">${cliente.phone}</p>
                <p class="email">${cliente.email}</p>
            </div>
        `;
        clientsList.append(clientCard);
    });
}
