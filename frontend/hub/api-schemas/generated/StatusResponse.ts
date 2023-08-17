// Autogenerated file. Please do not modify.

// If you want to modify fields to interface, create new one in the folder above and create interface with the same name.
// You can then add, modify or even delete existing interface fields. Delete is done with Omit, note however it returns new interface.
// Those autogenerated interfaces does not contains all types, some of them are unknown - those are candidates for custom modification.
// See readme in folder above for more information.

/* eslint-disable @typescript-eslint/no-empty-interface */

// URL of interface:
// /api/pulp/api/v3/status/

// Serializer for the status information of the app
export interface StatusResponse {
  // Version information of Pulp components
  versions: unknown;
  // List of online workers known to the application. An online worker is actively heartbeating and can respond to new work
  online_workers: unknown;
  // List of online content apps known to the application. An online content app is actively heartbeating and can serve data to clients
  online_content_apps: unknown;
  // Database connection information
  database_connection: unknown;
  // Redis connection information
  redis_connection: unknown;
  // Storage information
  storage: unknown;
  // Content-app settings
  content_settings: unknown;
  // Is Domains enabled
  domain_enabled: boolean;
}