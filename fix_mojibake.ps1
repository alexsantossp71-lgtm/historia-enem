# SPDX-License-Identifier: MIT
# Corrige mojibake (dupla codificação UTF-8 → Latin-1) em arquivos de texto.
# Sem argumentos, fixa index.html. Com argumento, fixa um arquivo específico.
param([string]$Path = 'index.html')

$bytes = [System.IO.File]::ReadAllBytes((Resolve-Path $Path))
$s = [System.Text.Encoding]::UTF8.GetString($bytes)
if ($s.Length -gt 0 -and $s[0] -eq [char]0xFEFF) { $s = $s.Substring(1) }

$cp1252 = [System.Text.Encoding]::GetEncoding(1252)
$fixed = [System.Text.Encoding]::UTF8.GetString($cp1252.GetBytes($s))

$bytes = [System.Text.Encoding]::UTF8.GetBytes($fixed)
[System.IO.File]::WriteAllBytes((Resolve-Path $Path), $bytes)
Write-Output "OK: $Path corrigido ($($bytes.Length) bytes)"