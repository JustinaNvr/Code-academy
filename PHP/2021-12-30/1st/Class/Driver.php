<?php

require_once 'Worker.php';

class Driver extends Worker
{

    private $experience;
    private $category;

    public function getExperience()
    {
        return $this->experience;
    }

      public function setExperience($experience)
    {
        $this->experience = $experience;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function setCategory($category)
    {
        $this->category = $category;
    }
}