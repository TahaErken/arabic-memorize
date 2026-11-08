@echo off
chcp 65001 > nul
echo Arapça Kelime Ezberleme Yerel Sunucusu Baslatiliyor...
start "" "http://localhost:8080"
python -m http.server 8080
