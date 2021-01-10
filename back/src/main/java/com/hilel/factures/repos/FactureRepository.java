package com.hilel.factures.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hilel.factures.entities.Boutique;
import com.hilel.factures.entities.Facture;


@RepositoryRestResource(path = "rest")
public interface FactureRepository extends JpaRepository<Facture, Long> {

	
	
		List<Facture> findByNomFacture(String nom); 
		List<Facture> findByNomFactureContains(String nom); 
		List<Facture> findByBoutiqueIdBou(Long id); 
		List<Facture> findByOrderByNomFactureAsc(); 

		
		
		/*@Query("select f from Facture f where f.nomFacture like %?1 and f.tvaFacture > ?2")
		List<Facture> FindByNomTva (String nom, Double tva); */
		
		//ameliorer  la visibilite 
		@Query("select f from Facture f where f.nomFacture like %:nom and f.tvaFacture > :tva") 
		List<Facture> FindByNomTva (
				@Param("nom") String nom,
				@Param("tva") Double tva); 

		
		@Query("select f from Facture f where f.boutique = ?1") 
		List<Facture> findByBoutique (Boutique boutique); 
		
		
//trierProduitsNomsPrix
		
		@Query("select f from Facture f order by f.nomFacture ASC, f.tvaFacture DESC")
		List<Facture> trierFacturesNomsTva(); 
		

}
