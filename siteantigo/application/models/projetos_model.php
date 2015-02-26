<?php

if (!defined('BASEPATH'))
	exit('No direct script access allowed');

include_once 'abstract/abstract_model.php';

class Projetos_model  extends Abstract_model {
    
	public function getXML($url = "library/xml/projetos.xml")
	{
		/*$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($curl, CURLOPT_URL, "./library/xml/projetos.xml");
		$content = curl_exec($curl);
		curl_close($curl);
		$this->xml = simplexml_load_string($content, 'SimpleXMLElement', LIBXML_NOCDATA);*/
                
                $this->xml = simplexml_load_file("./library/xml/projetos.xml", 'SimpleXMLElement', LIBXML_NOCDATA);
                
		return $this->xml;
	}
}

/* end of class Category */
?>