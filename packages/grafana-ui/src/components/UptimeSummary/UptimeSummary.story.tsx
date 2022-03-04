import React from 'react';
import { Story } from '@storybook/react';
import { UptimeSummary, UptimeSummaryProps } from './UptimeSummary';
import { Incident, IncidentType, UpdateType } from '../../types/uptime';

export const AllOperational: Story<UptimeSummaryProps> = () => {
  return (
    <div>
      <UptimeSummary incidents={[]} />
    </div>
  );
};

export const WithIncident: Story<UptimeSummaryProps> = () => {
  const incident: Incident = {
    title: 'Some service is kinda slow',
    description: 'We are looking in to it and will keep you updated.',
    type: IncidentType.Degraded,
    startTime: new Date(),
    updates: [],
  };

  return (
    <div>
      <UptimeSummary incidents={[incident]} />
    </div>
  );
};

export const WithOutage: Story<UptimeSummaryProps> = () => {
  const outage: Incident = {
    title: 'Severe outage',
    description: "We don't really know what's going on either, it's total chaos over here.",
    type: IncidentType.Outage,
    startTime: new Date(),
    updates: [],
  };

  return (
    <div>
      <UptimeSummary incidents={[outage]} />
    </div>
  );
};

export const WithOutageAndUpdates: Story<UptimeSummaryProps> = () => {
  const outage: Incident = {
    title: 'Severe outage in US clusters',
    description: "We don't really know what's going on either, it's total chaos over here.",
    type: IncidentType.Outage,
    startTime: new Date(),
    updates: [
      {
        timestamp: new Date(Date.now() + 9000),
        update: 'Looks like we fixed it',
        type: UpdateType.Resolved,
      },
      {
        timestamp: new Date(Date.now() + 8000),
        update: 'We are monitoring if we fixed it',
        type: UpdateType.Monitoring,
      },
      {
        timestamp: new Date(Date.now() + 7000),
        update: 'Still not sure...',
        type: UpdateType.Update,
      },
      {
        timestamp: new Date(Date.now() + 6000),
        type: UpdateType.Investigating,
        update: 'Situation is being investigated',
      },
    ],
  };

  return (
    <div>
      <UptimeSummary incidents={[outage]} />
    </div>
  );
};

export const WithMaintenance: Story<UptimeSummaryProps> = () => {
  const outage: Incident = {
    title: 'Just some maintenance',
    description: "No real reason to panic. It's all part of the plan.",
    type: IncidentType.Maintenance,
    startTime: new Date(),
    updates: [],
  };

  return (
    <div>
      <UptimeSummary incidents={[outage]} />
    </div>
  );
};

export const WithMultipleIncidents: Story<UptimeSummaryProps> = () => {
  const incident: Incident = {
    title: 'Some service is kinda slow',
    description: 'We are looking in to it and will keep you updated.',
    type: IncidentType.Degraded,
    startTime: new Date(),
    updates: [],
  };

  return (
    <div>
      <UptimeSummary incidents={[incident, incident]} />
    </div>
  );
};

export default {
  title: 'Status Page/Uptime Summary',
  component: UptimeSummary,
};