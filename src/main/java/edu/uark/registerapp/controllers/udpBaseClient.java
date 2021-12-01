package edu.uark.registerapp.controllers;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;


public class udpBaseClient {
    public static void main(String args[]) throws IOException
	{
		System.out.println("in client main");
		Scanner sc = new Scanner(System.in);

		// Step 1:Create the socket object for
		// carrying the data.
		DatagramSocket ds = new DatagramSocket();
		ds.setReuseAddress(true);

		InetAddress ip = InetAddress.getLocalHost();
		byte buf[] = null;

		// loop while user not enters "bye"
		// while (true)
		// {
			System.out.println("In while loop");
			String inp = "bye";
			//String inp = sc.nextLine();

			// convert the String input into the byte array.
			buf = inp.getBytes();

			// Step 2 : Create the datagramPacket for sending
			// the data.
			DatagramPacket DpSend =
				new DatagramPacket(buf, buf.length, ip, 8081);

			// Step 3 : invoke the send call to actually send
			// the data.
			ds.send(DpSend);

			// break the loop if user enters "bye"
			// if (inp.equals("bye"))
			// 	break;
		//}
	}
}
