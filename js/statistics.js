document.addEventListener('DOMContentLoaded', () => {
    const statsTable = document.getElementById('stats-table');
    const data = [
        { title: 'Google', url: 'https://google.com', views: 456, clicks: 120 },
        { title: 'YouTube', url: 'https://youtube.com', views: 789, clicks: 300 }
    ];
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 py-2 text-gray-300">${item.title}</td>
            <td class="px-4 py-2 text-sky-400">
                <a href="${item.url}" target="_blank" class="hover:underline">${item.url}</a>
            </td>
            <td class="px-4 py-2 text-gray-300">${item.views}</td>
            <td class="px-4 py-2 text-gray-300">${item.clicks}</td>
        `;
        statsTable.appendChild(row);
    });
});