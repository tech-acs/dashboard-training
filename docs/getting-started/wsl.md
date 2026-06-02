---
outline: deep
---

# WSL on Windows

The best way to use Docker on Windows is to install **Docker Desktop** with the **WSL 2 (Windows Subsystem for Linux)** backend.

## Install WSL 2

Install WSL 2 by following the instructions on the [official WSL installation page](https://learn.microsoft.com/en-us/windows/wsl/install). Once WSL is installed, you can install various Linux distributions. By default, the installed distribution will be Ubuntu, but you should verify it is installed and set as the default.

To install WSL 2, open PowerShell as Administrator and run:

```powershell
wsl --install
```

This command will enable the required features, and install WSL 2. Restart your computer when prompted.

## Post-Installation

You can access your WSL instance by typing `wsl` in the terminal or by searching for the installed distribution (e.g., Ubuntu) in the Start Menu. Ensure you are running Windows 10 (version 2004 or later) or Windows 11 with virtualization enabled in your BIOS/UEFI.

### Use the Ubuntu WSL Distribution, Not the Default Docker Desktop WSL

Once you are in WSL, check your current distro (you should see Ubuntu):

```bash
cat /etc/os-release
```

If you do not see Ubuntu, you have either not set Ubuntu as the default distro to use for WSL or the distro is not even downloaded and ready for use locally. To do so:

```powershell
wsl --install -d Ubuntu
```

Open Ubuntu from PowerShell:

```powershell
wsl -d Ubuntu
```

Set Ubuntu as the default distribution (so that you don't have to specify it everytime by using the -d flag):

```powershell
wsl --set-default Ubuntu
```

From here on, you can open Ubuntu from PowerShell like so:
```powershell
wsl
```

### Install Basic Tools in Ubuntu

```bash
sudo apt update
sudo apt install git -y
```

### Use Docker Desktop with WSL Integration

Do not try to install Docker inside Ubuntu using `apt`. Instead, integrate Docker Desktop with WSL:

1. Open **Docker Desktop**
2. Go to **Settings** → **Resources** → **WSL Integration**
3. Enable integration for **Ubuntu**

Test in Ubuntu:

```bash
docker --version
docker run hello-world
```

### Start Laravel Sail

After starting WSL (being inside your Ubuntu container), navigate to the project folder:

```bash
cd ~/projects/dashboard-training
```

Start Sail:

```bash
./vendor/bin/sail up -d
```

### Fix Web/MySQL/PostgreSQL Port Conflicts

If you see an error similar to:

```
ports are not available: 0.0.0.0:3306
```

It means the port is already in use on your Windows machine.

To fix this, open your `.env` file and change the conflicting port to an unused value. Then restart Sail:

```bash
./vendor/bin/sail down
./vendor/bin/sail up
```
