const assets = [
    { id: "LAP-001" , device: "Dell Latitude 5420" , user: "John Smith" , status: "Active"},
    { id: "LAP-002" , device: "HP Probook 830" , user: "Sarah Lee" , status: "Active"},
    { id: "PC-001" , device: "Lenovo ThinkCenter" , user: "Mike Ross" , status: "In Repair"},
    { id: "PRN-001" , device: "Cannon ImageClass" , user: "IT Department" , status: "Active"},
    { id: "MON-001" , device: "Dell 24 Monitor" , user: "Anna Doe" , status: "Active"}
];

console.log("Asset Loaded:" , assets);

const totalCount = assets.length;
const activeCount = assets.filter(asset => asset.status == "Active").length;
const repairCount = assets.filter(asset => asset.status == "In Repair").length;

document.getElementById("total-count").innerText = totalCount;
document.getElementById("active-count").innerText = activeCount;
document.getElementById("repair-count").innerText = repairCount;

const tableBody = document.getElementById("asset-table-body")

assets.forEach(asset => {
    const row = `
        <tr>
            <td>${asset.id}</td>
            <td>${asset.device}</td>
            <td>${asset.user}</td>
            <td>${asset.status}</td>
        </tr>    
    `;
    tableBody.innerHTML += row;
});