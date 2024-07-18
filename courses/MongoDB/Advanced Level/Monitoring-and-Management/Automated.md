---
id: lesson-4
title: "Automated Alerts and Notifications"
sidebar_label: Automated Alerts and Notifications
sidebar_position: 4
description: "Learn Automated Alerts and Notifications"
tags: [courses,advanced-level,Monitoring and Management,Introduction]
--- 

Setting up automated alerts and notifications helps proactively address issues before they impact the system.

**Alert Types**:
- **Performance Alerts**: Triggered when performance metrics exceed thresholds (e.g., high CPU usage, slow queries).
- **Health Alerts**: Triggered by changes in cluster health (e.g., node down, replication lag).
- **Operational Alerts**: Triggered by operational events (e.g., backup failures, configuration changes).

**Configuring Alerts in MongoDB Atlas**:
1. **Navigate to Alerts**: Go to the Alerts section in the Atlas dashboard.
2. **Create Alert**: Define the alert condition and set the threshold values.
3. **Configure Notifications**: Set up email, SMS, or webhook notifications.

**Example**: Setting up an alert for high CPU usage.
1. **Condition**: CPU usage > 80%
2. **Threshold**: Duration > 5 minutes
3. **Notification**: Send an email to the admin team
 