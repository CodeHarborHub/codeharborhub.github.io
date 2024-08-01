---
id: ip_addressing
title: IP Addressing
sidebar_label: IP Addressing
sidebar_position: 11
tags: [computer_networks, networks, communication]
description: An IP (Internet Protocol) address is a unique identifier assigned to each device connected to a network. It allows devices to locate and communicate with each other on the network.
---
# IP Addressing

## What is an IP Address?
An IP (Internet Protocol) address is a unique identifier assigned to each device connected to a network. It allows devices to locate and communicate with each other on the network. There are two main versions of IP addresses in use today: IPv4 and IPv6.

## IPv4 Addresses
IPv4 addresses are 32-bit numbers, typically represented in decimal format as four octets separated by dots, e.g., `192.168.1.1`.

### IPv4 Address Structure
- **Network Part**: Identifies the specific network.
- **Host Part**: Identifies the specific device within the network.

### Classes of IPv4 Addresses
IPv4 addresses are divided into five classes (A, B, C, D, E) based on the leading bits. Classes A, B, and C are used for unicast addresses, while classes D and E are reserved for multicast and experimental purposes, respectively.

| Class | Starting Address | Ending Address | Default Subnet Mask  |
|-------|-------------------|----------------|----------------------|
| A     | 0.0.0.0           | 127.255.255.255| 255.0.0.0            |
| B     | 128.0.0.0         | 191.255.255.255| 255.255.0.0          |
| C     | 192.0.0.0         | 223.255.255.255| 255.255.255.0        |
| D     | 224.0.0.0         | 239.255.255.255| N/A                  |
| E     | 240.0.0.0         | 255.255.255.255| N/A                  |

### Private IPv4 Addresses
Certain address ranges are reserved for private networks and cannot be routed on the public Internet. These ranges include:
- Class A: `10.0.0.0` to `10.255.255.255`
- Class B: `172.16.0.0` to `172.31.255.255`
- Class C: `192.168.0.0` to `192.168.255.255`

### IPv4 Subnetting
Subnetting divides a network into smaller subnetworks, allowing for better management and utilization of IP addresses.

#### Calculating Subnets
To calculate subnets, extend the network part by borrowing bits from the host part. For example, using a Class C address `192.168.1.0/24`, borrowing 2 bits for subnetting would result in `192.168.1.0/26`, creating 4 subnets.

### Subnet Mask
A subnet mask is a 32-bit number that masks an IP address, dividing it into network and host parts. For example, the subnet mask `255.255.255.0` is equivalent to `/24`.

## IPv6 Addresses
IPv6 addresses are 128-bit numbers, represented in hexadecimal format as eight groups of four hex digits, separated by colons, e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

### IPv6 Address Structure
- **Global Routing Prefix**: Identifies the network.
- **Subnet ID**: Identifies the subnet within the network.
- **Interface ID**: Identifies the specific device.

### Types of IPv6 Addresses
- **Unicast**: A single unique address identifying a specific device.
- **Multicast**: An address representing a group of devices, where data sent to this address is received by all group members.
- **Anycast**: An address assigned to multiple devices, where data is routed to the nearest device with that address.

### IPv6 Address Notation
- **Full Notation**: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- **Compressed Notation**: `2001:db8:85a3::8a2e:370:7334` (zeros are omitted)

## Subnetting in IPv6
IPv6 subnetting works similarly to IPv4 but is more flexible due to the larger address space. The standard subnet prefix length is `/64`, leaving 64 bits for device addresses within the subnet.

## CIDR (Classless Inter-Domain Routing)
CIDR is a method for allocating IP addresses and routing that replaces the old system of class-based networks. It allows for more efficient use of IP address space.

### CIDR Notation
CIDR notation specifies an IP address and its associated network prefix. For example, `192.168.1.0/24` indicates that the first 24 bits are the network part, and the remaining 8 bits are the host part.

## NAT (Network Address Translation)
NAT is a technique used to remap one IP address space into another. It modifies the IP address information in packet headers while in transit, enabling multiple devices on a local network to share a single public IP address.

### Types of NAT
- **Static NAT**: Maps a private IP address to a public IP address on a one-to-one basis.
- **Dynamic NAT**: Maps a private IP address to a public IP address from a pool of available addresses.
- **PAT (Port Address Translation)**: Also known as NAT overload, it maps multiple private IP addresses to a single public IP address using different ports.

## Summary
IP addressing is fundamental for network communication. Understanding IPv4 and IPv6 addresses, subnetting, CIDR, and NAT helps in designing and managing networks efficiently. This knowledge is essential for anyone working in networking and IT fields.