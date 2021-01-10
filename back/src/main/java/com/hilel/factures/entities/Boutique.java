package com.hilel.factures.entities;
import java.util.List; 
import javax.persistence.Entity; 
import javax.persistence.GeneratedValue; 
import javax.persistence.GenerationType; 
import javax.persistence.Id; 
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity 
public class Boutique  { 
@Id @GeneratedValue(strategy = GenerationType.IDENTITY) 

private Long idBou; 
private String nomBou; 
private String descriptionBou;


@JsonIgnore //pour eliminer de tomber dans un boucle infinie (lors de serialization ne pas retourner liste factures)
@OneToMany(mappedBy = "boutique") 
private List<Facture> factures ; 


}

