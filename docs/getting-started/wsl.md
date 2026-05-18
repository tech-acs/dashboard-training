---
outline: deep
---

# WSL on Windows
The best way to use Docker on Windows is to install **Docker Desktop** with the **WSL 2 (Windows Subsystem for Linux)** backend.

## Install WSL 2
Install WSL 2 as per the instructions on the [WSL 2 installation page](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Once WSL is installed, you can also install various linux distributions. By default, the installed Linux distribution will be Ubuntu but you need to make sure it is installed and that it is the default.

## Post-Installation
You can access your WSL instance by typing wsl in the terminal or by searching for the installed distribution (e.g., Ubuntu) in the Start Menu. Ensure you are running Windows 10/11 with virtualization enabled in your BIOS/UEFI.

### Use Ubuntu WSL, not Docker Desktop WSL

Check your distro (you should see Ubuntu):
```
cat /etc/os-release
```

Open Ubuntu from PowerShell:

```
wsl -d Ubuntu
```

Set Ubuntu as default:

```
wsl --set-default Ubuntu
```

### Install basic tools in Ubuntu
```
sudo apt update
sudo apt install git -y
```
   
### Use Docker Desktop with WSL Integration

Do not try to install docker in Ubuntu by using the apt installer, instead integrate docker with WSL, like so:

1. Open Docker Desktop
2. Go to Settings → Resources → WSL Integration
3. Enable integration for Ubuntu

Test in Ubuntu:
```
docker --version
docker run hello-world
```

### Start Laravel Sail
Go to the project folder:

```
cd ~/project/dashboard-training
```

Start Sail:
```
./vendor/bin/sail up
```

### Fix Web/MySQL/PostgreSQL port conflicts (if any)

If you see (or similar) error:

```
ports are not available: 0.0.0.0:3306
```

It means port 3306 is already in use on your Windows machine.

Edit/open your .env file and change the conflicting port to something else

Then restart Sail:
```
./vendor/bin/sail down
./vendor/bin/sail up
```
