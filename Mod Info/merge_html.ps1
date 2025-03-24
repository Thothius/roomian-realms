# PowerShell script to combine HTML files
$mainContent = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Main.html" -Raw
$content1 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content1.html" -Raw
$content2 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content2.html" -Raw
$content3 = Get-Content -Path "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races_Content3.html" -Raw

# Extract sections from content3
$religionContent = $content3 -replace '[\s\S]*<div id="religion-content">(.*?)<div id="void-content">[\s\S]*', '$1'
$voidContent = $content3 -replace '[\s\S]*<div id="void-content">(.*?)</div>[\s\S]*', '$1'

# Replace placeholders in main file
$mainContent = $mainContent -replace '<!-- Race cards will be inserted here -->', ($content1 + $content2)
$mainContent = $mainContent -replace '<!-- Religion content will be inserted here -->', $religionContent
$mainContent = $mainContent -replace '<!-- Void technology content will be inserted here -->', $voidContent

# Write the combined file
$mainContent | Out-File -FilePath "C:\Users\saare\AppData\Roaming\songsofsyx\mods\RG2\RG2_Races.html" -Encoding utf8

Write-Host "Combined HTML file created successfully!"
