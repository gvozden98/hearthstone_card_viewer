<?php
class AddDeck{
    public $id;   
    public $deck;
    
    public function __construct($id=null, $deck=null)
    {
        $this->id = $id;
        $this->deck = $deck;
    }

    #funkcija prikazi sve getAll

    public static function getAll(mysqli $conn)
    {
        $query = "SELECT * FROM decks";
        return $conn->query($query);
    }

    #funkcija getById

    public static function getById($id, mysqli $conn){
        $query = "SELECT * FROM decks WHERE id=$id";

        $myObj = array();
        if($msqlObj = $conn->query($query)){
            while($red = $msqlObj->fetch_array(1)){
                $myObj[]= $red;
            }
        }

        return $myObj;

    }

    #deleteById

    public function deleteById(mysqli $conn)
    {
        $query = "DELETE FROM deck WHERE id=$this->id";
        return $conn->query($query);
    }

    #update
    public function update($id, mysqli $conn)
    {
        $query = "UPDATE decks set deck = $this->deck WHERE id=$id";
        return $conn->query($query);
    }

    #insert add
    public static function add(AddDeck $newDeck, mysqli $conn)
    {
        $query = "INSERT INTO decks(deck) VALUES('$newDeck->deck')";
        return $conn->query($query);
    }
}
