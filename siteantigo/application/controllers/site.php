<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
include 'abstract/abstractController.php';

class Site extends AbstractController 
{
	function __construct()
	{
		parent::__construct();
                
                $this->load->model("Projetos_model");
                
                $allProjects = $this->Projetos_model->getXML();
                
                $this->_data["projectList"] = $allProjects;
                
		$this->setTemplate("pages/site/site_view");
	}
}