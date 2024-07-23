# Cyclic Redundancy Check

CRC or Cyclic Redundancy Check is a method of detecting accidental changes/errors in the communication channel. 

```java

import java.util.Arrays; 
class Program { 


	static String Xor(String a, String b) 
	{ 

		
		String result = ""; 
		int n = b.length(); 

		for (int i = 1; i < n; i++) { 
			if (a.charAt(i) == b.charAt(i)) 
				result += "0"; 
			else
				result += "1"; 
		} 
		return result; 
	} 
	static String Mod2Div(String dividend, String divisor) 
	{ 

		int pick = divisor.length(); 

	
		String tmp = dividend.substring(0, pick); 

		int n = dividend.length(); 

		while (pick < n) { 
			if (tmp.charAt(0) == '1') 

				tmp = Xor(divisor, tmp) 
					+ dividend.charAt(pick); 
			else

			
				tmp = Xor(new String(new char[pick]) 
							.replace("\0", "0"), 
						tmp) 
					+ dividend.charAt(pick); 

			
			pick += 1; 
		} 


		if (tmp.charAt(0) == '1') 
			tmp = Xor(divisor, tmp); 
		else
			tmp = Xor(new String(new char[pick]) 
						.replace("\0", "0"), 
					tmp); 

		return tmp; 
	} 


	static void EncodeData(String data, String key) 
	{ 
		int l_key = key.length(); 

		String appended_data 
			= (data 
			+ new String(new char[l_key - 1]) 
					.replace("\0", "0")); 

		String remainder = Mod2Div(appended_data, key); 


		String codeword = data + remainder; 
		System.out.println("Remainder : " + remainder); 
		System.out.println( 
			"Encoded Data (Data + Remainder) :" + codeword 
			+ "\n"); 
	} 
	static void Receiver(String data, String key) 
	{ 
		String currxor 
			= Mod2Div(data.substring(0, key.length()), key); 
		int curr = key.length(); 
		while (curr != data.length()) { 
			if (currxor.length() != key.length()) { 
				currxor += data.charAt(curr++); 
			} 
			else { 
				currxor = Mod2Div(currxor, key); 
			} 
		} 
		if (currxor.length() == key.length()) { 
			currxor = Mod2Div(currxor, key); 
		} 
		if (currxor.contains("1")) { 
			System.out.println( 
				"there is some error in data"); 
		} 
		else { 
			System.out.println("correct message received"); 
		} 
	} 

	public static void main(String[] args) 
	{ 
		String data = "100100"; 
		String key = "1101"; 
		System.out.println("\nSender side..."); 
		EncodeData(data, key); 

		System.out.println("Receiver side..."); 
		Receiver(data+Mod2Div(data+new String(new char[key.length() - 1]) 
							.replace("\0", "0"),key),key); 
	} 
} 

```
