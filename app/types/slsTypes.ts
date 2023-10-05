export type ConnectionInfo = {
	id: string;
	object: string;
	status: string;
	connectionId: string;
	sessionId: string;
	createdAt: number;
	activeAt: number;
	location: string;
	ip: string;
	platform: string;
	token: string;
	type: string;
	record: boolean;
	role: string;
	kurentoOptions: null | any; // You can replace 'any' with a more specific type if needed.
	customIceServers: any[]; // You can replace 'any' with a more specific type if needed.
	rtspUri: null | string;
	adaptativeBitrate: null | any; // You can replace 'any' with a more specific type if needed.
	onlyPlayWithSubscribers: null | any; // You can replace 'any' with a more specific type if needed.
	networkCache: null | any; // You can replace 'any' with a more specific type if needed.
	serverData: string;
	clientData: string;
	publishers: any[]; // You can replace 'any' with a more specific type if needed.
	subscribers: any[]; // You can replace 'any' with a more specific type if needed.
	data: any; // You can replace 'any' with a more specific type if needed.
	username: string;
	numberOfElements?: number; // Optional property
};
export type Connections = {
	connections: ConnectionInfo[];
};
export type SessionInfo = {
	id: string;
	object: string;
	settings: Record<string, any>; // You can replace 'any' with a more specific type if needed.
	createdAt: number;
	mediaMode: string;
	recording: boolean;
	sessionId: string;
	connections: Record<string, any>; // You can replace 'any' with a more specific type if needed.
	recordingMode: string;
	customSessionId: string;
	allowTranscoding: boolean;
	forcedVideoCodec: string;
};
export type Rooms = {
	id: number;
	name: string;
	active: boolean;
	type: string;
	description: string;
	roomId: string;
	agreement: null | any; // You can replace 'any' with a more specific type if needed.
	reset: boolean;
	allowTranscoding: boolean;
	recording: boolean;
	recordingMode: string;
	map_sessions: SessionInfo[]; // You can replace 'any' with a more specific type if needed.
	analytics: null | any; // You can replace 'any' with a more specific type if needed.
	liveStream: boolean;
	shortName: null | string;
	created_at: string;
	updated_at: string;
	forceVideoCodec: null | any; // You can replace 'any' with a more specific type if needed.
	forcedVideoCodec: string;
	connections: Connections[]; // You can replace 'any' with a more specific type if needed.
};
