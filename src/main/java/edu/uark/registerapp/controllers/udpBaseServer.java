package edu.uark.registerapp.controllers;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.*;
import org.json.simple.*;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

public class udpBaseServer {

	public static void main(String[] args) throws SocketException, UnknownHostException {  
		DatagramSocket socket = new DatagramSocket(null);
        // InetAddress inetAddress = InetAddress.getByName("localhost");
        // int iport = 7501;
		System.out.println("main being called");
        SocketAddress socketAddress = new InetSocketAddress("127.0.0.1", 7501);
        //socket.bind(socketAddress);
	}

	public JSONObject udpResponse() throws IOException {
		// Step 1 : Create a socket to listen at port 1234
		DatagramSocket ds = new DatagramSocket(7501);
		ds.setReuseAddress(true);
		byte[] receive = new byte[65535];

		DatagramPacket DpReceive = null;
			DpReceive = new DatagramPacket(receive, receive.length);

			// Step 3 : revieve the data in byte buffer.
			ds.receive(DpReceive);
			System.out.println("Client:-" + data(receive));
	
			JSONObject json = new JSONObject();
			String data = data(receive).toString();
			
			json.put("data", data);
			receive = new byte[65535];
			ds.close();
			return json;
	}

	// A utility method to convert the byte array
	// data into a string representation.
	public static StringBuilder data(byte[] a)
	{
		if (a == null)
			return null;
		StringBuilder ret = new StringBuilder();
		int i = 0;
		while (a[i] != 0)
		{
			ret.append((char) a[i]);
			i++;
		}
		return ret;
	}
}
