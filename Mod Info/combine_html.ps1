# PowerShell script to combine HTML files
$mainFile = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Main.html" -Raw
$content1 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content1.html" -Raw
$content2 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content2.html" -Raw
$content3 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content3.html" -Raw

# Insert content into main file
$mainFile = $mainFile -replace "<!-- Race cards will be inserted here -->", "$content1$content2"
$mainFile = $mainFile -replace "<!-- Religion content will be inserted here -->", "<div id=\"religion-content\">$($content3 -match '<div id="religion-content">(.*?)</div>' | ForEach-Object { $matches[1] })</div>"
$mainFile = $mainFile -replace "<!-- Void technology content will be inserted here -->", "<div id=\"void-content\">$($content3 -match '<div id="void-content">(.*?)</div>' | ForEach-Object { $matches[1] })</div>"

# Write the combined file
$mainFile | Set-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races.html"

Write-Host "Combined HTML file created successfully!"
